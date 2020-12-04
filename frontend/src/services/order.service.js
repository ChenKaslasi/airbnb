import httpService from './http.service.js'

export default {
  add,
  remove,
  getById,
  query,
  filter
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

function filter(userId={}){
  return httpService.post('order/filter',userId)
}