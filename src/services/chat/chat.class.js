// This is a skeleton for a custom service class. Remove or add the methods you need here
export class ChatService {
  constructor(options) {
    this.options = options
  }

  async find(_params) {
    return []
  }

  async get(id, _params) {
    return {
      id: 0,
      text: `A new message with ID: ${id}!`
    }
  }
  async create(data, params) {
    console.log('CREATE')
    console.log({ data, params })
    return data
  }

  // This method has to be added to the 'methods' option to make it available to clients
  async update(id, data, _params) {
    return {
      id: 0,
      ...data
    }
  }

  async patch(id, data, _params) {
    return {
      id: 0,
      text: `Fallback for ${id}`,
      ...data
    }
  }

  async remove(id, _params) {
    return {
      id: 0,
      text: 'removed'
    }
  }
}

export const getOptions = (app) => {
  return { app }
}
