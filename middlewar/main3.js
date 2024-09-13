

const express = require("express")

const app = express()
app.use(express.json())



app.post("/check",function (req,res) {


    
})

//// global catches --- error based middlewares defined at the end 
//// if their is exception then control uses this middleware and the end user will see the error

app.use(function (err,req,res,next) {
    //errorcount ++ --- used to alert devs
        res.json({
            msg:"soething with our server"
        })
})

app.listen(3000)