// Este es un esqueleto de una clase de servicio personalizada. Puedes eliminar o agregar los métodos que necesites aquí.
import { newsClassification } from '../../logic/index.js'

export class NewsClassificationService {
  constructor(options) {
    this.options = options
  }

  // Método para buscar registros de clasificación de noticias (puede personalizarse según la lógica de búsqueda).
  async find(_params) {
    return []
  }

  // Método para obtener un registro de clasificación de noticias por ID (puede personalizarse según la lógica de obtención).
  async get(id, _params) {
    return {
      id: 0,
      text: `Un nuevo mensaje con ID: ${id}!`
    }
  }

  // Método para crear una clasificación de noticias a partir de una pregunta (personalizable según la lógica de clasificación).
  async create(data, params) {
    // Utiliza la función newsClassification para clasificar la pregunta y obtener la clasificación.
    const response = await newsClassification(data.question)
    let classification = undefined

    // Normaliza la respuesta (si es necesario) y verifica las palabras clave para determinar la clasificación.
    const normalizedResponse = response.toLowerCase()
    if (normalizedResponse.includes('deporte')) {
      classification = 'deporte'
    } else if (normalizedResponse.includes('politica')) {
      classification = 'politica'
    } else if (normalizedResponse.includes('crimen')) {
      classification = 'crimen'
    } else if (normalizedResponse.includes('entretenimiento')) {
      classification = 'entretenimiento'
    } else if (normalizedResponse.includes('transporte')) {
      classification = 'transporte'
    }

    return {
      ...data,
      response,
      classification
    }
  }

  // Método para actualizar un registro de clasificación de noticias (personalizable según la lógica de actualización).
  async update(id, data, _params) {
    return {
      id: 0,
      ...data
    }
  }

  // Método para parchar (actualizar parcialmente) un registro de clasificación de noticias (personalizable según la lógica de parcheo).
  async patch(id, data, _params) {
    return {
      id: 0,
      text: `Recurso de respaldo para ${id}`,
      ...data
    }
  }

  // Método para eliminar un registro de clasificación de noticias (personalizable según la lógica de eliminación).
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