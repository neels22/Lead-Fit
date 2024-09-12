
const express = require("express")

const app = express()

app.use(express.json())

const user = [
    {
        name:"john",
        kidneys:[
            {
                healthy:false
            },
            {
                healthy:true
            }
        ]
    }
]

app.get("/",function (req,res) {


    const johnkidneys = user[0].kidneys;

    const numberofkidneys = johnkidneys.length;

    let healthykid = 0

    for (let i = 0; i < johnkidneys.length; i++) {

        if (johnkidneys[i].healthy) {
            healthykid++
        }
        
    }

    const unhealthy = numberofkidneys - healthykid

    console.log(johnkidneys)
    // res.send("your info: "+johnkidneys)

    res.json({
        numberofkidneys,
        healthykid,
        unhealthy
    })

})


app.post("/",function (req,res) {
    const ishealthy = req.body.ishealthy

    user[0].kidneys.push({healthy:ishealthy})

    res.send("done ")

})

app.put("/",function (req,res) {
    
    for (let i = 0; i < user[0].kidneys.length; i++) {

        user[0].kidneys[i].healthy  =false    
    }

    res.json({})

})

//// remove unhealthy kidneys
app.delete("/",function (req,res) {

    const newkidneys = []
    for (let i = 0; i < user[0].kidneys.length; i++) {

        if(user[0].kidneys[i].healthy ){
            newkidneys.push({
                healthy:true
            })
        }
    }

    user[0].kidneys = newkidneys

    res.json({msg:"done"})

    
})

app.listen(3000)
