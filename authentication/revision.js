

const express  = require("express")
const jwt = require("jsonwebtoken")

const app = express()

const jwtpassword = "123456"

const value = {
    name:"neel",
    accountno:"123123123"

}

const token = jwt.sign(value,jwtpassword)

console.log(token)

// token is encoded -->

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibmVlbCIsImFjY291bnRubyI6IjEyMzEyMzEyMyIsImlhdCI6MTcyNjQ5NzY0MH0.vKcwaELxj8-01BjnxsWma64scWhptLckY1GxojzueKU

// encoded token can be decoded by anyone but verified by only the backend server that created the token

/// the intruder doens't know how the encoding is done because they dont have the jwtpassword


const ver = jwt.verify(token,jwtpassword)

console.log(ver)