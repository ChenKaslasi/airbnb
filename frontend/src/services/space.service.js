import httpService from './http.service.js'

export default {
  add,
  remove,
  getById,
  query
}
function getById(spaceId) {
  return httpService.get(`spaces/${spaceId}`)
}

function remove(spaceId) {
  return httpService.delete(`space/${spaceId}`)
}
function add(space) {
  return httpService.post(`space`, space)
}

function query(filter = null) {
  var filterStr = '';
  if (filter) {
    filter.toLowerCase()
    // const searchStr = (filter.txt) ? `&q=${filter.txt}` : '';
    // const typeStr = (filter.type === 'All') ? '' : `&type=${filter.type}`;
    // const stockStr = (filter.stock) ? `&inStock=true` : '';
    filterStr = filter
  }
  return httpService.get(`spaces?address.city=${filterStr}`)
}

