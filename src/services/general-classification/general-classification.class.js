// Este es un esqueleto de una clase de servicio personalizada. Puedes eliminar o agregar los métodos que necesites aquí.
import { generalClassification } from '../../logic/index.js'

export class GeneralClassificationService {
  constructor(options) {
    this.options = options
  }

  // Método para buscar registros de clasificación general (puede personalizarse según la lógica de búsqueda).
  async find(_params) {
    return []
  }

  // Método para obtener un registro de clasificación general por ID (puede personalizarse según la lógica de obtención).
  async get(id, _params) {
    return {
      id: 0,
      text: `Un nuevo mensaje con ID: ${id}!`
    }
  }

  // Método para crear una clasificación general a partir de una pregunta (personalizable según la lógica de clasificación).
  async create(data, params) {
    // Utiliza la función generalClassification para clasificar la pregunta y obtener la clasificación.
    const response = await generalClassification(data.question)
    let classification = undefined
    console.log(response)

    // Determina la clasificación en función de la respuesta.
    if (response.toLowerCase().includes('pagos')) {
      classification = 'pagos'
    } else if (response.toLowerCase().includes('documentos')) {
      classification = 'documentos'
    } else if (response.toLowerCase().includes('noticias')) {
      classification = 'noticias'
    } else if (response.toLowerCase().includes('ayuda')) {
      classification = 'ayuda'
    } else if (response.toLowerCase().includes('extra')) {
      classification = 'extra'
    }
    return {
      ...data,
      response,
      classification
    }
  }

  // Método para actualizar un registro de clasificación general (personalizable según la lógica de actualización).
  async update(id, data, _params) {
    return {
      id: 0,
      ...data
    }
  }

  // Método para parchar (actualizar parcialmente) un registro de clasificación general (personalizable según la lógica de parcheo).
  async patch(id, data, _params) {
    return {
      id: 0,
      text: `Recurso de respaldo para ${id}`,
      ...data
    }
  }

  // Método para eliminar un registro de clasificación general (personalizable según la lógica de eliminación).
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
