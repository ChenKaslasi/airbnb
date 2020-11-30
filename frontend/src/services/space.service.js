import httpService from './http.service.js'

export default {
  add,
  remove,
  getById,
  query
}
function getById(spaceId) {
  return httpService.get(`api/space/${spaceId}`)
}

function remove(spaceId) {
  return httpService.delete(`api/space/${spaceId}`)
}
function add(space) {
  return httpService.post(`api/space`, space)
}

function query() {
    return httpService.get('api/space')
}

