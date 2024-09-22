

const { Password } = require("@mui/icons-material")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://new:zoC0r9hs0WkQIPQ8@cluster0.9yali.mongodb.net/course_project")



const AdminSchema = new mongoose.Schema({

    username : String,
    password : String

})

const UserSchema = new mongoose.Schema({

    username : String,
    password : String,
    purchasedCourses : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]

})

const CourseSchema = new mongoose.Schema({

    title:String,
    description:String,
    imageLink:String,
    price:Number 

})


const Admin = mongoose.model('Admin',AdminSchema)
const User = mongoose.model('User',AdminSchema)
const Course = mongoose.model('Course',AdminSchema)




module.exports={
Admin,
User,
Course
}