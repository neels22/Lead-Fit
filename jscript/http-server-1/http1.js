

const express = require("express")

const app = express()

function calcum(n) {
    let ans=0
    for (let i = 0; i < n; i++) {
       ans = ans + i
    }
    return ans 
}


app.get("/",function(req,res){


    const n = req.query.n;
    const ans = calcum(n)

    res.send("hi your answer is : "+ans.toString())

})


app.get("/new",function(req,res){


    const n = req.query.n;
    const ans = calcum(n)

    res.send("hi your answer is : "+ans.toString())

})


app.listen(3000)