import express from "express"
let app=express()

import ErrorHandler from "./middlewares/ErrorHandler.js"
import NotFound from "./middlewares/NotFound.js"


app.get("/",(req,res)=>{
    throw new Error("error is accoured")
    res.send("ThIS IS THE HOME PAGE again and again")
})

app.use(NotFound)
app.use(ErrorHandler)

let port =process.env.port || 5000



app.listen(port,()=>{
   console.log("app is on    5000")
})

