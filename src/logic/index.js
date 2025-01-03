import { openai } from '../openai/index.js'
import {
  STARTING_PROMPT,
  PAYMENT_PROMPT,
  DOCUMENT_PROMPT,
  HELPTI_PROMPT,
  EXTRAS_PROMPT,
  NEWS_PROMPT,
  DOCUMENT_OPTION
} from './prompts.js'

// Función para crear un chat con el modelo de lenguaje GPT-3.5-turbo
// y obtener una respuesta.
// Parámetros:
// - history: Un historial de mensajes de la conversación.
// - question: La pregunta actual del usuario.
// - propmt: La indicación (prompt) que se usa como parte del mensaje de sistema.
async function createChat(history, question, propmt) {
  const response = await openai.chat.completions
    .create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: propmt
        },
        ...history,
        { role: 'user', content: question }
      ]
    })
    .then((e) => {
      console.log('THEN')
      return e.choices[0].message
    })
    .catch(console.error)
  return response
}

// Función para realizar una clasificación inicial de una pregunta.
// Parámetro:
// - question: La pregunta a clasificar.
async function initialClasification(question) {
  const response = await createChat([], question, STARTING_PROMPT)
  return response.content
}

// Función para realizar una clasificación general de una pregunta.
// Parámetro:
// - question: La pregunta a clasificar.
const generalClassification = async (question) => {
  const response = await initialClasification(question)
  return response
}

// Funciones para clasificar preguntas en categorías específicas,
// como documentos, pagos, noticias, soporte técnico, información adicional y validación de CURP.

// Clasificación de preguntas relacionadas con documentos.
const documentClassification = async (question) => {
  const response = await createChat([], question, DOCUMENT_PROMPT)
  return response.content
}

// Clasificación de preguntas relacionadas con pagos.
const paymentClassification = async (question) => {
  const response = await createChat([], question, PAYMENT_PROMPT)
  return response.content
}

// Clasificación de preguntas relacionadas con noticias.
const newsClassification = async (question) => {
  const response = await createChat([], question, NEWS_PROMPT)
  return response.content
}

// Clasificación de preguntas relacionadas con soporte técnico.
const helpTiClassification = async (question) => {
  const response = await createChat([], question, HELPTI_PROMPT)
  return response.content
}

// Clasificación de preguntas relacionadas con información adicional.
const extraClassification = async (question) => {
  const response = await createChat([], question, EXTRAS_PROMPT)
  return response.content
}

// Función para obtener información detallada sobre noticias.
// Parámetros:
// - question: La pregunta relacionada con noticias.
// - classification: La clasificación previa de la pregunta.
const newsInformation = async (question, classification) => {
  let constructor = DOCUMENT_OPTION.NEWS_INFORMATION + classification
  console.log(constructor)
  const response = await createChat([], question, constructor)
  return response.content
}

// Función para validar una CURP (Clave Única de Registro de Población).
// Parámetro:
// - question: La pregunta relacionada con la validación de CURP.
const curpValidator = async (question) => {
  const response = await createChat([], question, DOCUMENT_OPTION.CURP)
  return response.content
}

// Exportación de todas las funciones disponibles.
export {
  generalClassification,
  documentClassification,
  paymentClassification,
  newsClassification,
  helpTiClassification,
  extraClassification,
  newsInformation,
  curpValidator
}

// Exportación adicional para uso de módulos.
export default {
  generalClassification,
  documentClassification,
  paymentClassification,
  newsClassification,
  helpTiClassification,
  extraClassification,
  newsInformation,
  curpValidator
}
