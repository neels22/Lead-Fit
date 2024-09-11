

// how to write an http server 

// express 
// install express from internet 

const express = require('express')
const app = express()  /// app object
const port = 3000      // 
const bodyParser = require("body-parser")

app.use(bodyParser.json()) /// out of box express can't parse json 
// app.use(express.json())

app.get('/route-handler',function (req,res) {
    // res.send('this is route handling ')
    res.json({
        name:'harkirat',
        age:'23'
    })
})

app.get('/', function(req, res)  {
  res.send('<b>hello bold world</b>')
})



app.post('/conversation',function (req,res) {
    console.log(req.headers)
    console.log(req.headers['authorization'])
    console.log(req.body)
    console.log(req.query.message)

    res.status(400).send('asdfad')
})

app.listen(port,function () {
    console.log('listening on port 3000')
})