require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const itemsRouter = require('./items-router')
const { NODE_ENV } = require('./config')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

//basic get route
app.get('/', (req,res)=>{
    res.send('Hello,world!')
})
app.use('/api/items', itemsRouter)

//error handling
app.use(function errorHandler(error, req, res, next){
  let response
  if (NODE_ENV === 'production') {
    response = {error:{message: 'server error'}}
  }else{
    console.error(error)
    response ={messag:error.message, error}
  }
  res.status(500).json(response)
})

module.exports = app