const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


async function query(filterBy = {}) {
    const collection = await dbService.getCollection('space');
    const cratiria = _buildCriteria(filterBy)
    try {
        // const spaces = await collection.find(
        //     {
        //     "address.city" : filterBy.city.toString(),

        // }).toArray();
        // console.log('spaces', spaces);
        const spaces = await collection.find(cratiria).toArray();
        return spaces
    } catch (err) {
        console.log('ERROR: cannot find spaces')
        throw err;
    }
}

async function getById(spaceId) {
    const collection = await dbService.getCollection('space')
    try {
        const space = await collection.findOne({
            '_id': ObjectId(spaceId)
        })
        return space
    } catch (err) {
        console.log(`ERROR: while finding space ${spaceId}`)
        throw err;
    }
}


async function remove(spaceId) {
    const collection = await dbService.getCollection('space')
    try {
        await collection.deleteOne({
            "_id": ObjectId(spaceId)
        })
    } catch (err) {
        console.log(`ERROR: cannot remove space ${spaceId}`)
        throw err;
    }
}


async function add(space) {
    space.bySpaceId = ObjectId(space.bySpaceId);
    space.aboutSpaceId = ObjectId(space.aboutSpaceId);

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
    if (filterBy.city) {
        return { "address.city" : filterBy.city.toString()}
    }
}


module.exports = {
    query,
    getById,
    remove,
    add,
}