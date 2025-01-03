// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const helpTiClassificationSchema = Type.Object(
  {
    id: Type.Number(),
    question: Type.String()
  },
  { $id: 'HelpTiClassification', additionalProperties: false }
)
export const helpTiClassificationValidator = getValidator(helpTiClassificationSchema, dataValidator)
export const helpTiClassificationResolver = resolve({})

export const helpTiClassificationExternalResolver = resolve({})

// Schema for creating new entries
export const helpTiClassificationDataSchema = Type.Pick(helpTiClassificationSchema, ['question'], {
  $id: 'HelpTiClassificationData'
})
export const helpTiClassificationDataValidator = getValidator(helpTiClassificationDataSchema, dataValidator)
export const helpTiClassificationDataResolver = resolve({})

// Schema for updating existing entries
export const helpTiClassificationPatchSchema = Type.Partial(helpTiClassificationSchema, {
  $id: 'HelpTiClassificationPatch'
})
export const helpTiClassificationPatchValidator = getValidator(helpTiClassificationPatchSchema, dataValidator)
export const helpTiClassificationPatchResolver = resolve({})

// Schema for allowed query properties
export const helpTiClassificationQueryProperties = Type.Pick(helpTiClassificationSchema, ['id', 'text'])
export const helpTiClassificationQuerySchema = Type.Intersect(
  [
    querySyntax(helpTiClassificationQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const helpTiClassificationQueryValidator = getValidator(
  helpTiClassificationQuerySchema,
  queryValidator
)
export const helpTiClassificationQueryResolver = resolve({})
