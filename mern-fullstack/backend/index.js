
const express = require("express")
const { createTodo, updateTodo } = require("./types") /// destructuring objects 
const app = express()

app.use(express.json())

const {todo} = require("./db")
const { describe } = require("node:test")

const PORT = 3000



app.post("/todo",async function (req,res) {

    const createPayload = req.body 
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return
    }
    // put it in mongo db 

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false 
    })

    res.json({
        msg:"Todo created"
    })

})


app.get("/todos",async function (req,res)   {

// get all the todos using todo.findall iguess

    const todos = await todo.find({}) /// to get all the todos dont add any arguments
    /// this will return a promise 

    console.log(todos)

    /// send the todos 
    res.json({
        todos 
    }) 
})

app.put("/completed",async function (req,res) {

    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return
    }
    // put it in mongo db 

    await todo.updateOne({
        _id:req.body.id

    },{
        completed:true 
    })

    res.json({
        msg:"Todo marked as completed"
    })
})


app.listen(PORT,()=>{
    console.log("server listening on port 3000")
})