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


async function query(filter = null) {
  var filterStr = '';
  if (filter) {
      filter.toLowerCase()
      // const searchStr = (filter.txt) ? `&q=${filter.txt}` : '';
      // const typeStr = (filter.type === 'All') ? '' : `&type=${filter.type}`;
      // const stockStr = (filter.stock) ? `&inStock=true` : '';
      filterStr = filter
      console.log(filterStr, 'filter string!!')
  }
  var spaces= await httpService.get(`spaces?address.city=${filterStr}`)
  console.log(spaces);
  return spaces
}

