// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  documentClassificationDataValidator,
  documentClassificationPatchValidator,
  documentClassificationQueryValidator,
  documentClassificationResolver,
  documentClassificationExternalResolver,
  documentClassificationDataResolver,
  documentClassificationPatchResolver,
  documentClassificationQueryResolver
} from './document-classification.schema.js'
import { DocumentClassificationService, getOptions } from './document-classification.class.js'

export const documentClassificationPath = 'document-classification'
export const documentClassificationMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './document-classification.class.js'
export * from './document-classification.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const documentClassification = (app) => {
  // Register our service on the Feathers application
  app.use(documentClassificationPath, new DocumentClassificationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: documentClassificationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(documentClassificationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(documentClassificationExternalResolver),
        schemaHooks.resolveResult(documentClassificationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(documentClassificationQueryValidator),
        schemaHooks.resolveQuery(documentClassificationQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(documentClassificationDataValidator),
        schemaHooks.resolveData(documentClassificationDataResolver)
      ],
      patch: [
        schemaHooks.validateData(documentClassificationPatchValidator),
        schemaHooks.resolveData(documentClassificationPatchResolver)
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
