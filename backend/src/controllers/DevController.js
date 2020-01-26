const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utilis/parseStringasArray')

module.exports = {
    async index (req, res) {
        const devs = await Dev.find()

        return res.json(devs)
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body

        let dev = await Dev.findOne({github_username})

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

            const { name, avatar_url, bio } = apiResponse.data

            if (name == null) {
                const { login: name } = apiResponse.data
            }

            techsArray = parseStringAsArray(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }

        return res.json(dev)
    },

    async destroy(req, res) {
        const { github_username } = req.params
        
        const del = await Dev.deleteOne({
            github_username
        })

        const devs = await Dev.find()
        
        return res.json(devs)
    }
}