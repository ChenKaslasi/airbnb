import httpService from './http.service.js'

export default {
  add,
  remove,
  getById,
  query,
  filter
}
function getById(spaceId) {
  return httpService.get(`api/space/${spaceId}`)
}

function remove(spaceId) {
  return httpService.delete(`api/space/${spaceId}`)
}

function query() {
  return httpService.get('api/space')
}

function add(space) {
  return httpService.post(`api/space/add`, space)
}

function filter(filterBy={}){
  return httpService.post('api/space/filter',filterBy)
}

