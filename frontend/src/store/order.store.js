import orderService from '../services/order.service.js'

export const orderStore = {
    strict: true,
    state: {
        orders: [],
    },
    getters: {
        ordersForDisplay(state) {
            return state.orders;
        },
    },
    mutations: {
        setOrders(state, {orders}) {
            console.log('orders!!',orders);
            state.orders = orders;
        },
        setCurrorder(state,{order}) {
            state.currOrder = order;
        },
        addOrder(state, {order}) {
            state.orders.push(order)
        },
        removeOrder(state, {orderId}) {
            state.orders = state.orders.filter(order => order._id !== orderId)
        },
    },
    actions: {
        async addOrder(context, {order}) {
            console.log('STORE ADD ORDER ',order)
            order = await orderService.add(order)
            context.commit({type: 'addOrder', order})
            return order;
        },

        async removeOrder(context, {orderId}) {
            await orderService.remove(orderId);
            context.commit({type: 'removeOrder', orderId})
        },
        
        async filterOrders(context,{filterId}) {
            console.log(filterId);
            let orders = await orderService.filter(filterId);
            console.log('Orders!!',orders);
            context.commit({type:'setOrders', orders})
        },
    },
}
