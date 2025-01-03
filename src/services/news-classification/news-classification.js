// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  newsClassificationDataValidator,
  newsClassificationPatchValidator,
  newsClassificationQueryValidator,
  newsClassificationResolver,
  newsClassificationExternalResolver,
  newsClassificationDataResolver,
  newsClassificationPatchResolver,
  newsClassificationQueryResolver
} from './news-classification.schema.js'
import { NewsClassificationService, getOptions } from './news-classification.class.js'

export const newsClassificationPath = 'news-classification'
export const newsClassificationMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './news-classification.class.js'
export * from './news-classification.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const newsClassification = (app) => {
  // Register our service on the Feathers application
  app.use(newsClassificationPath, new NewsClassificationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: newsClassificationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(newsClassificationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(newsClassificationExternalResolver),
        schemaHooks.resolveResult(newsClassificationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(newsClassificationQueryValidator),
        schemaHooks.resolveQuery(newsClassificationQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(newsClassificationDataValidator),
        schemaHooks.resolveData(newsClassificationDataResolver)
      ],
      patch: [
        schemaHooks.validateData(newsClassificationPatchValidator),
        schemaHooks.resolveData(newsClassificationPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
