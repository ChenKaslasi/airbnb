import httpService from './http.service.js'

export default {
  add,
  remove,
  getById,
  query,
  filter,
  filterProfile
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
  console.log('USERID',userId);
  return httpService.post('order/filter',userId)
}
async function filterProfile(userId={}){
  let userIdProf= {'_id': userId}
  var httpReq= await httpService.post('order/filter/profile',userIdProf)
  return  httpReq
}