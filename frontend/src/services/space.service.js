import httpService from './http.service.js'

export default {
  add,
  remove,
  getById,
  query,
  filter
}
function getById(spaceId) {
  return httpService.get(`space/${spaceId}`)
}

function remove(spaceId) {
  return httpService.delete(`space/${spaceId}`)
}
function add(space) {
  return httpService.post(`space`, space)
}

function query() {
    return httpService.get('space')
}

function filter(filterBy={}){
  console.log(filterBy);
  return httpService.post('filter',filterBy)
}

