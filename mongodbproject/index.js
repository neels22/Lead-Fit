

const express = require("express")
const bodyparser = require("body-parser")
const app = express()
const adminRouter = require('./routes/admin')
const userRouter  = require('./routes/user')


// middleware for parsing request bodies
app.use(bodyparser.json())

/// aytime request comes to / admin/anythingsishere it will go to adminrouter similar to user
// this basically means any admin request please go here any user request please go there
app.use('/admin',adminRouter)
app.use('/user',userRouter)


const PORT = 3000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

