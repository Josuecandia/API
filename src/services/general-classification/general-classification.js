// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  generalClassificationDataValidator,
  generalClassificationPatchValidator,
  generalClassificationQueryValidator,
  generalClassificationResolver,
  generalClassificationExternalResolver,
  generalClassificationDataResolver,
  generalClassificationPatchResolver,
  generalClassificationQueryResolver
} from './general-classification.schema.js'
import { GeneralClassificationService, getOptions } from './general-classification.class.js'

export const generalClassificationPath = 'general-classification'
export const generalClassificationMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './general-classification.class.js'
export * from './general-classification.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const generalClassification = (app) => {
  // Register our service on the Feathers application
  app.use(generalClassificationPath, new GeneralClassificationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: generalClassificationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(generalClassificationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(generalClassificationExternalResolver),
        schemaHooks.resolveResult(generalClassificationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(generalClassificationQueryValidator),
        schemaHooks.resolveQuery(generalClassificationQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(generalClassificationDataValidator),
        schemaHooks.resolveData(generalClassificationDataResolver)
      ],
      patch: [
        schemaHooks.validateData(generalClassificationPatchValidator),
        schemaHooks.resolveData(generalClassificationPatchResolver)
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
