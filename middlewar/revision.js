


//middle wares is like a ticket checker 

// an express is essentially a series of middleware calls
// chain of middlewares
// why not in same middleware??? --- middlewares can be reused



// 

const express = require("express")


const app = express()


// function that allows only if age >=14 then allow to ride the ride

function agechecker(req,res,next) {
    
    const age = req.query.age 

    if (age>=14) {

        next()
    }
    else{
        res.json({
            msg:"you can't ride"
        })
    }

}

//// if you know a middleware is going to every routes or endpoints then use app.use(middleware)

// app.use(agechecker)

app.get("/ride1",agechecker,function (req,res) {
    

    res.json({
        msg:"this is ride1 and you can have the ride"
    })
})

app.get("/ride2",agechecker,function (req,res) {
    

    res.json({
        msg:"this is ride 2 and you can have the ride"
    })
})

app.listen(3000)