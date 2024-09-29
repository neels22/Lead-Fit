import { memo, useState , useEffect } from 'react'


import axios from "axios";
import './App.css'

function App() {

  const [id,setID] = useState(0)


  return (
    <>

    <button onClick={()=>{

      setID(1)

    }} >1</button>
        <button onClick={()=>{

setID(2)

}} >2</button>
    <button onClick={()=>{

setID(3)

}} >3</button>
    <button onClick={()=>{

setID(4)

}} >4</button>



  <Todo id={id}></Todo>

    </>
  )
}

function Todo({id}) {
  const [todos, setTodo] = useState([])


  useEffect(() => {

    console.log("useEffect executed")

    axios.get(`${id}`).then(function (res) {
      // console.log(res)
      setTodo(res.data)
    })
    

  }, [id])

  return(
    <div>
    
    {id}


    
    
    </div>
  )
  
}


export default App
