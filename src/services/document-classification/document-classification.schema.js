// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const documentClassificationSchema = Type.Object(
  {
    id: Type.Number(),
    question: Type.String()
  },
  { $id: 'DocumentClassification', additionalProperties: false }
)
export const documentClassificationValidator = getValidator(documentClassificationSchema, dataValidator)
export const documentClassificationResolver = resolve({})

export const documentClassificationExternalResolver = resolve({})

// Schema for creating new entries
export const documentClassificationDataSchema = Type.Pick(documentClassificationSchema, ['question'], {
  $id: 'DocumentClassificationData'
})
export const documentClassificationDataValidator = getValidator(
  documentClassificationDataSchema,
  dataValidator
)
export const documentClassificationDataResolver = resolve({})

// Schema for updating existing entries
export const documentClassificationPatchSchema = Type.Partial(documentClassificationSchema, {
  $id: 'DocumentClassificationPatch'
})
export const documentClassificationPatchValidator = getValidator(
  documentClassificationPatchSchema,
  dataValidator
)
export const documentClassificationPatchResolver = resolve({})

// Schema for allowed query properties
export const documentClassificationQueryProperties = Type.Pick(documentClassificationSchema, ['id', 'text'])
export const documentClassificationQuerySchema = Type.Intersect(
  [
    querySyntax(documentClassificationQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const documentClassificationQueryValidator = getValidator(
  documentClassificationQuerySchema,
  queryValidator
)
export const documentClassificationQueryResolver = resolve({})
