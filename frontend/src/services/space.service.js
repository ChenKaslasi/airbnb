import httpService from './http.service.js'

export default {
  add,
  remove,
  getById,
  query,
  filter,
  update
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
function update(miniOrder) {
  console.log(miniOrder,'min!!!!!!!=====');
  return httpService.put(`space/${miniOrder.spaceId}`, miniOrder)
}
function filter(filterBy={}){
  console.log(filterBy);
  return httpService.post('space/filter',filterBy)
}

