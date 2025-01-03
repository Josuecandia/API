// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const newsInformationSchema = Type.Object(
  {
    id: Type.Number(),
    question: Type.String(),
    classification: Type.String()
  },
  { $id: 'NewsInformation', additionalProperties: false }
)
export const newsInformationValidator = getValidator(newsInformationSchema, dataValidator)
export const newsInformationResolver = resolve({})

export const newsInformationExternalResolver = resolve({})

// Schema for creating new entries
export const newsInformationDataSchema = Type.Pick(newsInformationSchema, ['question', 'classification'], {
  $id: 'NewsInformationData'
})
export const newsInformationDataValidator = getValidator(newsInformationDataSchema, dataValidator)
export const newsInformationDataResolver = resolve({})

// Schema for updating existing entries
export const newsInformationPatchSchema = Type.Partial(newsInformationSchema, {
  $id: 'NewsInformationPatch'
})
export const newsInformationPatchValidator = getValidator(newsInformationPatchSchema, dataValidator)
export const newsInformationPatchResolver = resolve({})

// Schema for allowed query properties
export const newsInformationQueryProperties = Type.Pick(newsInformationSchema, ['id', 'text'])
export const newsInformationQuerySchema = Type.Intersect(
  [
    querySyntax(newsInformationQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const newsInformationQueryValidator = getValidator(newsInformationQuerySchema, queryValidator)
export const newsInformationQueryResolver = resolve({})
