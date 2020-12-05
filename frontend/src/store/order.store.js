import orderService from '../services/order.service.js'
var localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);
export const orderStore = {
    strict: true,
    state: {
        loggedinUser: localLoggedinUser,
        orders: [],
    },
    getters: {
        ordersForDisplay(state) {
            return state.orders;
        },
    },
    mutations: {
        setOrders(state, { orders }) {
            console.log('orders!!', orders);
            state.orders = orders.filter(order => order.userId === localLoggedinUser._id);
        },
        // filterOrderProfile(state, { orders }) {
        //     console.log(orders[0].userId);
        //     console.log(localLoggedinUser._id);
        //     state.orders = orders.filter(order => order.userId === localLoggedinUser._id);

        // },
        setCurrorder(state, { order }) {
            state.currOrder = order;
        },
        addOrder(state, { order }) {
            state.orders.push(order)
        },
        removeOrder(state, { orderId }) {
            state.orders = state.orders.filter(order => order._id !== orderId)
        },
    },
    actions: {
        async addOrder(context, { order }) {
            console.log('STORE ADD ORDER ', order)
            order = await orderService.add(order)
            context.commit({ type: 'addOrder', order })
            return order;
        },

        async removeOrder(context, { orderId }) {
            await orderService.remove(orderId);
            context.commit({ type: 'removeOrder', orderId })
        },

        async filterOrders(context, { filterId }) {
            console.log(filterId);
            let orders = await orderService.filter(filterId);
            console.log('Orders!!', orders);
            context.commit({ type: 'setOrders', orders })
        },
        async filterProfile(context, { filterId }) {
            console.log(filterId);
            let orders = await orderService.filterProfile(filterId);
            console.log('Orders!!', orders);
            context.commit({ type: 'setOrders', orders })
        },
    },
}
