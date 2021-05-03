import api from './axiosConfig'

export default {
  getQueryParams (filter) {
    if (!filter) return

    if (filter.name) {
      return { params: { q: this.getFilterQuery(filter) } }
    }
  },

  getFilterQuery (filter) {
    return filter.name
      ? `name:${filter.name}`
      : null
  },

  async fetch (endpoint = 'cards', filter) {
    if (filter && filter.id) {
      endpoint += '/' + filter.id
    }

    return api.get(endpoint, this.getQueryParams(filter))
  }
}
