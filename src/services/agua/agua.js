// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  aguaDataValidator,
  aguaPatchValidator,
  aguaQueryValidator,
  aguaResolver,
  aguaExternalResolver,
  aguaDataResolver,
  aguaPatchResolver,
  aguaQueryResolver
} from './agua.schema.js'
import { AguaService, getOptions } from './agua.class.js'

export const aguaPath = 'agua'
export const aguaMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './agua.class.js'
export * from './agua.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const agua = (app) => {
  // Register our service on the Feathers application
  app.use(aguaPath, new AguaService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: aguaMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(aguaPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(aguaExternalResolver), schemaHooks.resolveResult(aguaResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(aguaQueryValidator), schemaHooks.resolveQuery(aguaQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(aguaDataValidator), schemaHooks.resolveData(aguaDataResolver)],
      patch: [schemaHooks.validateData(aguaPatchValidator), schemaHooks.resolveData(aguaPatchResolver)],
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
