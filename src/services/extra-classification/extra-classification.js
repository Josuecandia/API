// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  extraClassificationDataValidator,
  extraClassificationPatchValidator,
  extraClassificationQueryValidator,
  extraClassificationResolver,
  extraClassificationExternalResolver,
  extraClassificationDataResolver,
  extraClassificationPatchResolver,
  extraClassificationQueryResolver
} from './extra-classification.schema.js'
import { ExtraClassificationService, getOptions } from './extra-classification.class.js'

export const extraClassificationPath = 'extra-classification'
export const extraClassificationMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './extra-classification.class.js'
export * from './extra-classification.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const extraClassification = (app) => {
  // Register our service on the Feathers application
  app.use(extraClassificationPath, new ExtraClassificationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: extraClassificationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(extraClassificationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(extraClassificationExternalResolver),
        schemaHooks.resolveResult(extraClassificationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(extraClassificationQueryValidator),
        schemaHooks.resolveQuery(extraClassificationQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(extraClassificationDataValidator),
        schemaHooks.resolveData(extraClassificationDataResolver)
      ],
      patch: [
        schemaHooks.validateData(extraClassificationPatchValidator),
        schemaHooks.resolveData(extraClassificationPatchResolver)
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
