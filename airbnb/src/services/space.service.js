import httpService from './http.service.js'

export default {
  getSpaces,
  getById,
  filterSpaces,
}
function getSpaces() {
  return httpService.get('space')
}
function getById(spaceId) {
  return httpService.get(`space/${spaceId}`)
}

function filterSpaces(filterBy={}){
  return httpService.post('/spaces',filterBy)
}


