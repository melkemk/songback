require('express-async-errors')
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const app=express()
const song=require('./route/song')


app.use(cors())
app.use(express.static('static'))
app.use(express.json())
app.use('/',song)
module.exports=app 