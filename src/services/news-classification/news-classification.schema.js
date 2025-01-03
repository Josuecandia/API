// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const newsClassificationSchema = Type.Object(
  {
    id: Type.Number(),
    question: Type.String()
  },
  { $id: 'NewsClassification', additionalProperties: false }
)
export const newsClassificationValidator = getValidator(newsClassificationSchema, dataValidator)
export const newsClassificationResolver = resolve({})

export const newsClassificationExternalResolver = resolve({})

// Schema for creating new entries
export const newsClassificationDataSchema = Type.Pick(newsClassificationSchema, ['question'], {
  $id: 'NewsClassificationData'
})
export const newsClassificationDataValidator = getValidator(newsClassificationDataSchema, dataValidator)
export const newsClassificationDataResolver = resolve({})

// Schema for updating existing entries
export const newsClassificationPatchSchema = Type.Partial(newsClassificationSchema, {
  $id: 'NewsClassificationPatch'
})
export const newsClassificationPatchValidator = getValidator(newsClassificationPatchSchema, dataValidator)
export const newsClassificationPatchResolver = resolve({})

// Schema for allowed query properties
export const newsClassificationQueryProperties = Type.Pick(newsClassificationSchema, ['id', 'text'])
export const newsClassificationQuerySchema = Type.Intersect(
  [
    querySyntax(newsClassificationQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const newsClassificationQueryValidator = getValidator(newsClassificationQuerySchema, queryValidator)
export const newsClassificationQueryResolver = resolve({})
