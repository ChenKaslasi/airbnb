import httpService from './http.service.js'

export default {
  add,
  remove,
  getById,
  query
}
function getById(orderId) {
  return httpService.get(`order/${orderId}`)
}

function remove(orderId) {
  return httpService.delete(`order/${orderId}`)
}
function add(order) {
  return httpService.post(`order`, order)
}

function query() {
    return httpService.get('order')
}

 