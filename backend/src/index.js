const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('to on')
})

app.listen(3000)