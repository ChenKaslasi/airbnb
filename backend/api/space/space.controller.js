const logger = require('../../services/logger.service')
const spaceService = require('./space.service')

// TODO: needs error handling! try, catch

async function getSpaces(req, res) {
    try {
        const spaces = await spaceService.query(req.query)
        res.send(spaces)
    } catch (err) {
        logger.error('Cannot get spaces', err);
        res.status(500).send({ error: 'cannot get spaces' })

    }
}

async function deleteSpace(req, res) {
    try {
        await spaceService.remove(req.params.id)
        res.end()
    } catch (err) {
        logger.error('Cannot delete space', err);
        res.status(500).send({ error: 'cannot delete space' })
    }
}

async function addSpace(req, res) {
    var space = req.body;
    space = await spaceService.add(space)
    space.byUser = req.session.space;
    // TODO - need to find aboutUser
    space.aboutUser = {}
    res.send(space)
}

module.exports = {
    getSpaces,
    deleteSpace,
    addSpace,
}