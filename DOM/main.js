


const express= require("express")

const app = express()

app.get("/sum",function (req,res)   {

    const num1 = parseInt(req.query.a) 
    const num2 = parseInt(req.query.b)

    const sum = num1+num2 

    res.send(sum.toString())
    
})

app.listen(3000)