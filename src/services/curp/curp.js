// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  curpDataValidator,
  curpPatchValidator,
  curpQueryValidator,
  curpResolver,
  curpExternalResolver,
  curpDataResolver,
  curpPatchResolver,
  curpQueryResolver,
  curpValidator
} from './curp.schema.js'
import { CurpService, getOptions } from './curp.class.js'

export const curpPath = 'curp'
export const curpMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './curp.class.js'
export * from './curp.schema.js'

// const validator = async (context) => {
//   const myJSON = JSON.stringify(context.data)
//   const validateData = await curpValidator(myJSON)
//   console.log('validateData', validateData)
// }

// A configure function that registers the service and its hooks via `app.configure`
export const curp = (app) => {
  // Register our service on the Feathers application
  app.use(curpPath, new CurpService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: curpMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(curpPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(curpExternalResolver), schemaHooks.resolveResult(curpResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(curpQueryValidator), schemaHooks.resolveQuery(curpQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(curpDataValidator), schemaHooks.resolveData(curpDataResolver)],
      patch: [schemaHooks.validateData(curpPatchValidator), schemaHooks.resolveData(curpPatchResolver)],
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
