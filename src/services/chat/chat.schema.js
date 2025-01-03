// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const chatSchema = Type.Object(
  {
    id: Type.Number(),
    question: Type.String(),
    device: Type.String(),
    history: Type.Optional(Type.Array(Type.Object({}))),
    document: Type.Optional(Type.String()),
    step: Type.Optional(Type.Number())
  },
  { $id: 'Chat', additionalProperties: false }
)
export const chatValidator = getValidator(chatSchema, dataValidator)
export const chatResolver = resolve({})

export const chatExternalResolver = resolve({})

// Schema for creating new entries
export const chatDataSchema = Type.Pick(chatSchema, ['question', 'device', 'history'], {
  $id: 'ChatData'
})
export const chatDataValidator = getValidator(chatDataSchema, dataValidator)
export const chatDataResolver = resolve({})

// Schema for updating existing entries
export const chatPatchSchema = Type.Partial(chatSchema, {
  $id: 'ChatPatch'
})
export const chatPatchValidator = getValidator(chatPatchSchema, dataValidator)
export const chatPatchResolver = resolve({})

// Schema for allowed query properties
export const chatQueryProperties = Type.Pick(chatSchema, ['id', 'text'])
export const chatQuerySchema = Type.Intersect(
  [
    querySyntax(chatQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const chatQueryValidator = getValidator(chatQuerySchema, queryValidator)
export const chatQueryResolver = resolve({})
