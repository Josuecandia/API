// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const paymentClassificationSchema = Type.Object(
  {
    id: Type.Number(),
    question: Type.String()
  },
  { $id: 'PaymentClassification', additionalProperties: false }
)
export const paymentClassificationValidator = getValidator(paymentClassificationSchema, dataValidator)
export const paymentClassificationResolver = resolve({})

export const paymentClassificationExternalResolver = resolve({})

// Schema for creating new entries
export const paymentClassificationDataSchema = Type.Pick(paymentClassificationSchema, ['question'], {
  $id: 'PaymentClassificationData'
})
export const paymentClassificationDataValidator = getValidator(paymentClassificationDataSchema, dataValidator)
export const paymentClassificationDataResolver = resolve({})

// Schema for updating existing entries
export const paymentClassificationPatchSchema = Type.Partial(paymentClassificationSchema, {
  $id: 'PaymentClassificationPatch'
})
export const paymentClassificationPatchValidator = getValidator(
  paymentClassificationPatchSchema,
  dataValidator
)
export const paymentClassificationPatchResolver = resolve({})

// Schema for allowed query properties
export const paymentClassificationQueryProperties = Type.Pick(paymentClassificationSchema, ['id', 'text'])
export const paymentClassificationQuerySchema = Type.Intersect(
  [
    querySyntax(paymentClassificationQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const paymentClassificationQueryValidator = getValidator(
  paymentClassificationQuerySchema,
  queryValidator
)
export const paymentClassificationQueryResolver = resolve({})
