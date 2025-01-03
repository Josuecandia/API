// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const extraClassificationSchema = Type.Object(
  {
    id: Type.Number(),
    question: Type.String()
  },
  { $id: 'ExtraClassification', additionalProperties: false }
)
export const extraClassificationValidator = getValidator(extraClassificationSchema, dataValidator)
export const extraClassificationResolver = resolve({})

export const extraClassificationExternalResolver = resolve({})

// Schema for creating new entries
export const extraClassificationDataSchema = Type.Pick(extraClassificationSchema, ['question'], {
  $id: 'ExtraClassificationData'
})
export const extraClassificationDataValidator = getValidator(extraClassificationDataSchema, dataValidator)
export const extraClassificationDataResolver = resolve({})

// Schema for updating existing entries
export const extraClassificationPatchSchema = Type.Partial(extraClassificationSchema, {
  $id: 'ExtraClassificationPatch'
})
export const extraClassificationPatchValidator = getValidator(extraClassificationPatchSchema, dataValidator)
export const extraClassificationPatchResolver = resolve({})

// Schema for allowed query properties
export const extraClassificationQueryProperties = Type.Pick(extraClassificationSchema, ['id', 'text'])
export const extraClassificationQuerySchema = Type.Intersect(
  [
    querySyntax(extraClassificationQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const extraClassificationQueryValidator = getValidator(extraClassificationQuerySchema, queryValidator)
export const extraClassificationQueryResolver = resolve({})
