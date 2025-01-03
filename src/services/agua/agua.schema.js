// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const aguaSchema = Type.Object(
  {
    id: Type.Number(),
    number: Type.String(),
    name: Type.String(), 
    type: Type.String()
  },
  { $id: 'Agua', additionalProperties: false }
)
export const aguaValidator = getValidator(aguaSchema, dataValidator)
export const aguaResolver = resolve({})

export const aguaExternalResolver = resolve({})

// Schema for creating new entries
export const aguaDataSchema = Type.Pick(aguaSchema, ['number', 'name'], {
  $id: 'AguaData'
})
export const aguaDataValidator = getValidator(aguaDataSchema, dataValidator)
export const aguaDataResolver = resolve({})

// Schema for updating existing entries
export const aguaPatchSchema = Type.Partial(aguaSchema, {
  $id: 'AguaPatch'
})
export const aguaPatchValidator = getValidator(aguaPatchSchema, dataValidator)
export const aguaPatchResolver = resolve({})

// Schema for allowed query properties
export const aguaQueryProperties = Type.Pick(aguaSchema, ['id', 'text'])
export const aguaQuerySchema = Type.Intersect(
  [
    querySyntax(aguaQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const aguaQueryValidator = getValidator(aguaQuerySchema, queryValidator)
export const aguaQueryResolver = resolve({})
