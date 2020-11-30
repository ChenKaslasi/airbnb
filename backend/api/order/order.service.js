
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('order')
    try {
        const orders = await collection.find(criteria).toArray();
        orders.forEach(order => delete order.password);

        return orders
    } catch (err) {
        console.log('ERROR: cannot find orders')
        throw err;
    }
}



async function remove(orderId) {
    const collection = await dbService.getCollection('order')
    try {
        await collection.deleteOne({ "_id": ObjectId(orderId) })
    } catch (err) {
        console.log(`ERROR: cannot remove order ${orderId}`)
        throw err;
    }
}


async function add(order) {
    order.byOrderId = ObjectId(order.byOrderId);
    order.aboutOrderId = ObjectId(order.aboutOrderId);

    const collection = await dbService.getCollection('order')
    try {
        await collection.insertOne(order);
        return order;
    } catch (err) {
        console.log(`ERROR: cannot insert order`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    return criteria;
}

module.exports = {
    query,
    remove,
    add
}


