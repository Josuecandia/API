// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  newsInformationDataValidator,
  newsInformationPatchValidator,
  newsInformationQueryValidator,
  newsInformationResolver,
  newsInformationExternalResolver,
  newsInformationDataResolver,
  newsInformationPatchResolver,
  newsInformationQueryResolver
} from './news-information.schema.js'
import { NewsInformationService, getOptions } from './news-information.class.js'

export const newsInformationPath = 'news-information'
export const newsInformationMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './news-information.class.js'
export * from './news-information.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const newsInformation = (app) => {
  // Register our service on the Feathers application
  app.use(newsInformationPath, new NewsInformationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: newsInformationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(newsInformationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(newsInformationExternalResolver),
        schemaHooks.resolveResult(newsInformationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(newsInformationQueryValidator),
        schemaHooks.resolveQuery(newsInformationQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(newsInformationDataValidator),
        schemaHooks.resolveData(newsInformationDataResolver)
      ],
      patch: [
        schemaHooks.validateData(newsInformationPatchValidator),
        schemaHooks.resolveData(newsInformationPatchResolver)
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
