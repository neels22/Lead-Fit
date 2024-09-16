


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


////////////////////////////
//////      Request counter
//////////////////////////
let requestcount = 0

app.use(function (req,res,next) {
    requestcount ++
    next()
})
///////////////////////////////
////// Rate limiter
/////////////
let numberofreqperuser = {}

setInterval(()=>{
    numberofreqperuser = {}
},1000)

app.use(function (req,res,next) {
        const userid = req.headers['user-id']

        if (numberofreqperuser[userid]) {

            numberofreqperuser[userid]++

            if (numberofreqperuser[userid] > 5 ) {
                res.status(404).send('no entry')
            }else{
                next()
            }
        }
        else{
            numberofreqperuser[userid] = 1;
            next()
        }
})

/////////////////////////////////////////
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

app.get("/requestcount",function (req,res) {
    res.json({
        msg:requestcount + " total requests"
    })
})

///////////////////////////////////////////////
//////// Error handling middlewares  -- 
//////////////////////////////////////////////
// 
let errorcount = 0
app.use(function (err,req,res,next) {
    errorcount++
    res.status(404).send("this is error ")
    
})



app.listen(3000)