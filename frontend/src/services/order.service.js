import httpService from './http.service.js'

export default {
  add,
  remove,
  getById,
  query
}
function getById(orderId) {
  return httpService.get(`api/order/${orderId}`)
}

function remove(orderId) {
  return httpService.delete(`api/order/${orderId}`)
}
function add(order) {
  return httpService.post(`api/order`, order)
}

function query() {
    return httpService.get('api/order')
}

