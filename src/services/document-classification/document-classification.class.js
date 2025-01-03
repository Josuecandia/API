// Este es un esqueleto de una clase de servicio personalizada. Puedes eliminar o agregar los métodos que necesites aquí.
import { documentClassification } from '../../logic/index.js'

export class DocumentClassificationService {
  constructor(options) {
    this.options = options
  }

  // Método para buscar registros de clasificación de documentos (puede personalizarse según la lógica de búsqueda).
  async find(_params) {
    return []
  }

  // Método para obtener un registro de clasificación de documentos por ID (puede personalizarse según la lógica de obtención).
  async get(id, _params) {
    return {
      id: 0,
      text: `Un nuevo mensaje con ID: ${id}!`
    }
  }

  // Método para crear una clasificación de documento a partir de una pregunta (personalizable según la lógica de clasificación).
  async create(data, params) {
    const response = await documentClassification(data.question)
    let classification = undefined
    console.log('data', data)
    let nextQuestions = []

    if (response.toLowerCase().includes('curp')) {
      classification = 'curp'
      nextQuestions = [
        '¿Cuál es tu apellido paterno?',
        '¿Cuál es tu apellido materno?',
        '¿Cuál es tu nombre?',
        '¿Cuándo naciste?',
        '¿Cuál es tu género?',
        '¿En qué estado naciste?'
      ]
      // Importar una función donde se maneje la CURP.
    } else if (response.toLowerCase().includes('rfc')) {
      classification = 'rfc'

      // Importar una función donde se maneje el RFC.
    } else if (response.toLowerCase().includes('nss')) {
      classification = 'nss'

      // Importar una función donde se maneje el NSS.
    }
    return {
      ...data,
      response,
      classification,
      nextQuestions
    }
  }

  // Método para actualizar un registro de clasificación de documentos (personalizable según la lógica de actualización).
  async update(id, data, _params) {
    return {
      id: 0,
      ...data
    }
  }

  // Método para parchar (actualizar parcialmente) un registro de clasificación de documentos (personalizable según la lógica de parcheo).
  async patch(id, data, _params) {
    return {
      id: 0,
      text: `Recurso de respaldo para ${id}`,
      ...data
    }
  }

  // Método para eliminar un registro de clasificación de documentos (personalizable según la lógica de eliminación).
  async remove(id, _params) {
    return {
      id: 0,
      text: 'eliminado'
    }
  }
}

// Función para obtener las opciones de la aplicación (puede ser personalizada según las necesidades).
export const getOptions = (app) => {
  return { app }
}
