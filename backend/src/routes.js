const routes = require('express').Router();

routes.get('/', (req, res) => {
    return res.json({ mensage: 'to on' })
})


module.exports = routes;