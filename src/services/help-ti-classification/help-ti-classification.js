// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  helpTiClassificationDataValidator,
  helpTiClassificationPatchValidator,
  helpTiClassificationQueryValidator,
  helpTiClassificationResolver,
  helpTiClassificationExternalResolver,
  helpTiClassificationDataResolver,
  helpTiClassificationPatchResolver,
  helpTiClassificationQueryResolver
} from './help-ti-classification.schema.js'
import { HelpTiClassificationService, getOptions } from './help-ti-classification.class.js'

export const helpTiClassificationPath = 'help-ti-classification'
export const helpTiClassificationMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './help-ti-classification.class.js'
export * from './help-ti-classification.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const helpTiClassification = (app) => {
  // Register our service on the Feathers application
  app.use(helpTiClassificationPath, new HelpTiClassificationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: helpTiClassificationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(helpTiClassificationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(helpTiClassificationExternalResolver),
        schemaHooks.resolveResult(helpTiClassificationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(helpTiClassificationQueryValidator),
        schemaHooks.resolveQuery(helpTiClassificationQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(helpTiClassificationDataValidator),
        schemaHooks.resolveData(helpTiClassificationDataResolver)
      ],
      patch: [
        schemaHooks.validateData(helpTiClassificationPatchValidator),
        schemaHooks.resolveData(helpTiClassificationPatchResolver)
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
