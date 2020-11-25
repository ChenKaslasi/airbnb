import httpService from './http.service.js'

export default {
  getSpaces,
  getById,
  filterSpaces,
  query
}
function getSpaces() {
  return httpService.get('spaces')
}
function getById(spaceId) {
  return httpService.get(`spaces/${spaceId}`)
}

function filterSpaces(filterBy={}){
  return httpService.get('spaces',filterBy)
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

