// Este es un esqueleto de una clase de servicio personalizada. Puedes eliminar o agregar los métodos que necesites aquí.
import { curpValidator } from '../../logic/index.js'
import { curpGenerator } from '../../logic/generators/curp.js'

export class CurpService {
  constructor(options) {
    this.options = options
  }

  // Método para buscar registros de CURP (puede personalizarse según la lógica de búsqueda).
  async find(_params) {
    return []
  }

  // Método para obtener un registro de CURP por ID (puede personalizarse según la lógica de obtención).
  async get(id, _params) {
    return {
      id: 0,
      text: `Un nuevo mensaje con ID: ${id}!`
    }
  }

  // Método para crear un registro de CURP (personalizable según la lógica de creación).
  async create(data, params) {
    console.log('data', data)

    // Llama a la función curpValidator para validar y obtener datos normalizados.
    const response = await curpValidator(JSON.stringify(data).replace('cumDate', 'birthDate'))
    const toJSON = JSON.parse(response)
    console.log('toJSON', toJSON)

    const { name, firstName, lastName, birthDate, gender, state } = toJSON

    // Genera la CURP utilizando los datos obtenidos.
    const curp = curpGenerator(name, firstName, lastName, birthDate, gender, state)

    return { curp, data }
  }

  // Método para actualizar un registro de CURP (personalizable según la lógica de actualización).
  async update(id, data, _params) {
    return {
      id: 0,
      ...data
    }
  }

  // Método para parchar (actualizar parcialmente) un registro de CURP (personalizable según la lógica de parcheo).
  async patch(id, data, _params) {
    return {
      id: 0,
      text: `Recurso de respaldo para ${id}`,
      ...data
    }
  }

  // Método para eliminar un registro de CURP (personalizable según la lógica de eliminación).
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
