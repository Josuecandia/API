// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'
import { first } from 'rxjs'

// Main data model schema
export const curpSchema = Type.Object(
  {
    id: Type.Number(),
    name: Type.String(),
    firstName: Type.String(),
    lastName: Type.String(),
    birthDate: Type.String(),
    gender: Type.String(),
    state: Type.String(),
    cumDate: Type.Optional(Type.String())
  },
  { $id: 'Curp', additionalProperties: false }
)
export const curpValidator = getValidator(curpSchema, dataValidator)
export const curpResolver = resolve({})

export const curpExternalResolver = resolve({})

// Schema for creating new entries
export const curpDataSchema = Type.Pick(
  curpSchema,
  ['name', 'firstName', 'lastName', 'birthDate', 'gender', 'state', 'cumDate'],
  {
    $id: 'CurpData'
  }
)
export const curpDataValidator = getValidator(curpDataSchema, dataValidator)
export const curpDataResolver = resolve({})

// Schema for updating existing entries
export const curpPatchSchema = Type.Partial(curpSchema, {
  $id: 'CurpPatch'
})
export const curpPatchValidator = getValidator(curpPatchSchema, dataValidator)
export const curpPatchResolver = resolve({})

// Schema for allowed query properties
export const curpQueryProperties = Type.Pick(curpSchema, ['id', 'text'])
export const curpQuerySchema = Type.Intersect(
  [
    querySyntax(curpQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const curpQueryValidator = getValidator(curpQuerySchema, queryValidator)
export const curpQueryResolver = resolve({})
