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
            state.orders = orders;
            console.log(state.orders,'state orders')
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
            order = await orderService.add(order)
            context.commit({type: 'addOrder', order})
            return order;
        },

        async removeOrder(context, {orderId}) {
            await orderService.remove(orderId);
            context.commit({type: 'removeOrder', orderId})
        },
        
        async filterOrders(context,{filterBy}) {
            const orders = await orderService.query(filterBy);
            context.commit({type:'setOrders', orders})
        },

    },
    computed:{
    }
}
