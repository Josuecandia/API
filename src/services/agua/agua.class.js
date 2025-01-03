// Este es un esqueleto de una clase de servicio personalizada. Puedes eliminar o agregar los métodos que necesites aquí.
export class AguaService {
  constructor(options) {
    this.options = options
  }

  // Método para buscar registros de agua (puede personalizarse según la lógica de búsqueda).
  async find(_params) {
    return []
  }

  // Método para obtener un registro de agua por ID (puede personalizarse según la lógica de obtención).
  async get(id, _params) {
    return {
      id: 0,
      text: `Un nuevo mensaje con ID: ${id}!`
    }
  }

  // Método para crear un registro de agua (personalizable según la lógica de creación).
  async create(data, params) {
    const { type, number, name } = data

    if (type === 'efectivo') {
      return {
        ...data,
        response:
          'A continuación, te daré el número de referencia para el pago de tu recibo de agua. Solo tendrás que ir a tu OXXO más cercano y enseñarle el número al cajero. El número de referencia aparecerá en tu pantalla al terminar este mensaje.',
        reference: '5487123690'
      }
    } else if (type === 'tarjeta') {
      return {
        ...data,
        nextQuestions: [
          '¿Cuál es el número de tu tarjeta?',
          '¿Cuál es la fecha de expiración de tu tarjeta?',
          '¿Cuál es el código de seguridad de tu tarjeta?'
        ]
      }
    }
    return {
      data
    }
  }

  // Método para actualizar un registro de agua (personalizable según la lógica de actualización).
  async update(id, data, _params) {
    return {
      id: 0,
      ...data
    }
  }

  // Método para parchar (actualizar parcialmente) un registro de agua (personalizable según la lógica de parcheo).
  async patch(id, data, _params) {
    return {
      id: 0,
      text: `Recurso de respaldo para ${id}`,
      ...data
    }
  }

  // Método para eliminar un registro de agua (personalizable según la lógica de eliminación).
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
