const route= require ('express').Router()

const {data}=require('./Data')

route.get('/page',data)

module.exports={route}