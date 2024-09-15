
const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://new:zoC0r9hs0WkQIPQ8@cluster0.9yali.mongodb.net/user_app")

const User = mongoose.model('users', {name:String ,email:String,password:String} )


const user = new User({
    name:'neel sarode',
    email:'neel@gmail.com',
    password:'123456'
})

user.save()
  




