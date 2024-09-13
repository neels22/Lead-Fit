
const express = require("express")

const app = express()

app.get("/",function (req,res) {
    
    const kidid = req.query.kidid 
    const username = req.headers.username 
    const password = req.headers.password

    if (!(username==="neel" && password==="neel")) {
        
        res.status(400).json({
            msg:"sometihign is with your inputs 1"
        })
        return
      
    }
    if (kidid!=1 && kidid!=2) {

        res.status(400).json({
            msg:"sometihign is with your inputs 2"
        })
        return

        
    }
    

    res.json({
        msg:"its fine"
    })
    


})

app.listen(3000)