
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('space')
    try {
        const spaces = await collection.find(criteria).toArray();
        return spaces
    } catch (err) {
        console.log('ERROR: cannot find spaces')
        throw err;
    }
}


async function remove(spaceId) {
    const collection = await dbService.getCollection('space')
    try {
        await collection.deleteOne({ "_id": ObjectId(spaceId) })
    } catch (err) {
        console.log(`ERROR: cannot remove space ${spaceId}`)
        throw err;
    }
}


async function add(space) {
    space.byUserId = ObjectId(space.byUserId);
    space.aboutUserId = ObjectId(space.aboutUserId);

    const collection = await dbService.getCollection('space')
    try {
        await collection.insertOne(space);
        return space;
    } catch (err) {
        console.log(`ERROR: cannot insert space`)
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
    add,
    
}


