const Dev = require('../models/Dev')
const parseStringAsArray = require('../utilis/parseStringasArray')

module.exports = {
    async index (req, res) {
        const { latitude, longitude, techs } = req.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            }
        })

        return res.json({ devs })
    }
}