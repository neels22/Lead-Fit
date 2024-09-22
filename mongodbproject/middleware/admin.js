

// check if admin actually exist in db

const { Admin } = require("../db/index")

function adminMiddleware(req,res,next) {
    //check headers for username and password and see if it exist 
    const username = req.headers.username
    const password = req.headers.password

    Admin.findOne({
        username:username,
        password:password 
         
    }).then(function (value) {
        if (value) {
            next()
        }
        else{
            res.status(403).json({
                msg:"user doesnt exist"
            })
        }
    })
}

module.exports = adminMiddleware