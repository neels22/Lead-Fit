const { Router }= require("express")

const Usermiddleware = require("../middleware/user")
const { Admin , Course , User } = require("../db")

const router = Router()


router.post("/signup",async (req,res)=>{
    const username =  req.body.username
    const password =  req.body.password

    // check if user with this username already exist 

    await User.create({
        username:username,
        password:password
    })

    res.json({
        msg:"user created succesfully"
    })

})


router.get("/courses",async(req,res)=>{

    const response =await Course.find({})

    res.json({
        courses:response
    })

})


router.post("/courses/:courseId",Usermiddleware,(req,res)=>{

    const courseId = req.params.courseId 

    const username =  req.headers.username
    // input validation using zod
    User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    })

    res.json({
        msg:"purchase complete"
    })


})

router.get("/purchasedcourses",Usermiddleware,async(req,res)=>{

    const user = await User.findOne({
        username:req.headers.username

    })

    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })

    res.json({
        courses:courses
    })

})

module.exports = router