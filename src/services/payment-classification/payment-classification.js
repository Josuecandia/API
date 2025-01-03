// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  paymentClassificationDataValidator,
  paymentClassificationPatchValidator,
  paymentClassificationQueryValidator,
  paymentClassificationResolver,
  paymentClassificationExternalResolver,
  paymentClassificationDataResolver,
  paymentClassificationPatchResolver,
  paymentClassificationQueryResolver
} from './payment-classification.schema.js'
import { PaymentClassificationService, getOptions } from './payment-classification.class.js'

export const paymentClassificationPath = 'payment-classification'
export const paymentClassificationMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './payment-classification.class.js'
export * from './payment-classification.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const paymentClassification = (app) => {
  // Register our service on the Feathers application
  app.use(paymentClassificationPath, new PaymentClassificationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: paymentClassificationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(paymentClassificationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(paymentClassificationExternalResolver),
        schemaHooks.resolveResult(paymentClassificationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(paymentClassificationQueryValidator),
        schemaHooks.resolveQuery(paymentClassificationQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(paymentClassificationDataValidator),
        schemaHooks.resolveData(paymentClassificationDataResolver)
      ],
      patch: [
        schemaHooks.validateData(paymentClassificationPatchValidator),
        schemaHooks.resolveData(paymentClassificationPatchResolver)
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
