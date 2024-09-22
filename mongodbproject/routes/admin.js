

const { Router }= require("express")

const adminMiddleware = require("../middleware/admin")
const { Admin , Course } = require("../db")

const router = Router()

router.post("/signup",async (req,res)=>{
    const username =  req.body.username
    const password =  req.body.password

    // check if user with this username already exist 

    await Admin.create({
        username:username,
        password:password
    })

    res.json({
        msg:"user created succesfully"
    })

})

router.post("/courses",adminMiddleware,async(req,res)=>{

    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.title
    const price = req.body.title

   const newcourse = await Course.create({
        title,
        description,
        imageLink,
        price

    })

    res.json({
        msg:"course created succesfully" , courseId:newcourse._id
    })

})

router.get("/courses",adminMiddleware,async(req,res)=>{

    const response =await Course.find({})

    res.json({
        courses:response
    })

})

module.exports = router