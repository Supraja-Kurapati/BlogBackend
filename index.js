const express=require('express')

const app=express()

const {route}=require('./Route')
const cors=require('cors')
app.use(cors({
    origin:"*"
}))
app.use('/api',route)
app.listen(5005,()=>{
    console.log("server is Running");
})