// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const generalClassificationSchema = Type.Object(
  {
    id: Type.Number(),
    question: Type.String()
  },
  { $id: 'GeneralClassification', additionalProperties: false }
)
export const generalClassificationValidator = getValidator(generalClassificationSchema, dataValidator)
export const generalClassificationResolver = resolve({})

export const generalClassificationExternalResolver = resolve({})

// Schema for creating new entries
export const generalClassificationDataSchema = Type.Pick(generalClassificationSchema, ['question'], {
  $id: 'GeneralClassificationData'
})
export const generalClassificationDataValidator = getValidator(generalClassificationDataSchema, dataValidator)
export const generalClassificationDataResolver = resolve({})

// Schema for updating existing entries
export const generalClassificationPatchSchema = Type.Partial(generalClassificationSchema, {
  $id: 'GeneralClassificationPatch'
})
export const generalClassificationPatchValidator = getValidator(
  generalClassificationPatchSchema,
  dataValidator
)
export const generalClassificationPatchResolver = resolve({})

// Schema for allowed query properties
export const generalClassificationQueryProperties = Type.Pick(generalClassificationSchema, ['id', 'text'])
export const generalClassificationQuerySchema = Type.Intersect(
  [
    querySyntax(generalClassificationQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const generalClassificationQueryValidator = getValidator(
  generalClassificationQuerySchema,
  queryValidator
)
export const generalClassificationQueryResolver = resolve({})
