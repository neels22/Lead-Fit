

const express  = require("express")
const jwt = require("jsonwebtoken")
const zod = require("zod")


const app = express()
const jwtpassword = "123456"

const emailschema = zod.string().email()
const passwordschema = zod.string().min(6)


function signjwt(username,password) {

    const usernameres = emailschema.safeParse(username)
    const passwordres = passwordschema.safeParse(password)

    if (!usernameres.success | !passwordres.success) {
        return null        
    }

    const signature = jwt.sign({username},jwtpassword)
    return signature
}

const ans = signjwt('ass@gmail.com','232adfadsf3')
console.log(ans)

function verifyjwt(token) {

    let ans = true
    try{
        const ver = jwt.verify(token,jwtpassword)
    }catch(e){
        ans = false
    }

    return ans
}
console.log(verifyjwt(ans))

function decode(token) {
    const decode = jwt.decode(token)
    if (decode) {
        return true
    }else{
        return false
    }

}

const dec = decode(ans)
console.log(dec)