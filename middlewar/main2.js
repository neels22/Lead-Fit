const express = require("express")

const app = express()


function usermiddleware(req,res,next) {
    if (condition) {
        
    }
    else{
        next()
    }
}


function kidneymiddleware(req,res,next) {
    if (condition) {
        

    }
    else{
        next()
    }
}

app.get("/",usermiddleware,kidneymiddleware,function (req,res) {

    /// actual logic here 

res.send("everything is fine ")
})

///////////////////////////////////////


let totalrequest = 0
function calculaterequest(req,res,next) {
    totalrequest++
    console.log("total requests: " + totalrequest)
    next()
}

app.get("/req",calculaterequest,function (req,res) {
    res.send("done")
})


///////////////////////////////////////


app.use(express.json()) //// means express json middleware is going to be called every route ---- express.json itself returns a function 


app.use(calculaterequest) //// means any request comes to any route will have this as a middleware added ---- we didn't call it here

app.listen(3000)