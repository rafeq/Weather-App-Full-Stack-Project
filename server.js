const bodyParser=require('body-parser')
const express = require('express')
const path = require('path')
const api=require('./server/routes/api')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/',api)

const port = 3000
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})


