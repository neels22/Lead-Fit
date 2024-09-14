
const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const jwtpassword = "123456";

app.use(express.json())
const all_users = [
    {
        username: "neel",
        password: "1234567",
        name: "neel sarode"
    },
    {
        username: "john_doe",
        password: "abcdefg",
        name: "John Doe"
    },
    {
        username: "jane_smith",
        password: "password123",
        name: "Jane Smith"
    }
];

function userexist(username,password) {

    for (let i  = 0; i  < all_users.length; i ++) {

        if (all_users[i].username==username && all_users[i].password==password) {
            return true;
        }
    }
    return false;
    
}

app.post("/sign-in",function (req,res) {

    username = req.body.username;
    password = req.body.password;

    if(!userexist(username,password)){
        return res.status(403).json({
            msg:"user doesn't exist"
        })
    }

    var token = jwt.sign({username:username},jwtpassword); /// takes input and converts it to token which is a string 
    return res.json({
        token   //// it is stored in local storage -- responsibility of end user
    })    
})

app.get("/users",function (req,res ) {
    const token = req.headers.authorization

    const decoded = jwt.verify(token,jwtpassword)
    const username = decoded.username;

    res.json({
        users: all_users.filter(function (value) {
            if (value.username==username) {
                return false

            }
            else{
                return true
            }
        })
    })
    
})


app.listen(3000)