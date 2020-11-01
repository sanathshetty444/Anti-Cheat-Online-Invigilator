const path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 8000
// const cors= require('cors')
const basePath = path.join(__dirname, '../public')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(basePath))
// app.use(cors())
//start express server
app.listen(port, () => {
    console.log('Server started on post ' + port)
})