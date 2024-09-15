
const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

// database connection stirng in gitignore 
const User = mongoose.model('users', {name:String ,email:String,password:String} )



app.post("/signup",async function (req,res)  {
    
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name

    const existinguser = await User.findOne({email:username})
    console.log(existinguser)
    if(existinguser){
        return res.status(400).send("user already exist")
    }

    const user = new User({
        name:name,
        email:username,
        password:password
    })
    
    user.save()

    res.json({
        msg:"user signed up successfully "
    })

})

app.listen(3000)



