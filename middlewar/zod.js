



const { Password } = require("@mui/icons-material")
const express = require("express")
const zod = require("zod")


const app = express()
app.use(express.json())

const schema = zod.array(zod.number())




function validateinput(obj) {

    const schema1 = zod.object({
        email : zod.string().email(),
        password: zod.string().min(8),
        country: zod.literal("IN"),
        kidneys:zod.array(zod.number())
    })
    const kidney = obj

    const response = schema1.safeParse(kidney)
    return response
    
}

app.post("/req",function (req,res) {
    
    const response = validateinput(req.body)

    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else{
        res.send({
            response
    })
    }

})





app.listen(3000)