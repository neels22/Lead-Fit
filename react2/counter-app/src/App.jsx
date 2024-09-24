

import { useState } from "react"

import { Todo } from "./Todo"
import { DarkNewTodo } from "./DarkTodo"
// let state = {
//   count:0
// }
/// this wont work because react does not consider any variable as a state variable
// to make it state variable use -- useState - so that react keeps track of it

function App() {

  // defining the initial state 
  // const [count,setCount] = useState(0) // [0,1]

  const [todo,setTodo] =  useState([])

  function addTodo() {
    setTodo([...todo,{
      title:"new todo",
      desc:"this is added from button"
    }])
  }


  return (
    <div>
      {/* <CustomButton count={count} setCount ={setCount} ></CustomButton> */}

    <button onClick={addTodo}>add new todo</button>

    {/* <Todo title={todo[0].title} desc={todo[0].desc}/>
    <Todo title={todo[1].title} desc={todo[1].desc}/> */}

      {/* better approach is to use map  */}

      {
        todo.map(function (todo) {
          return <Todo title={todo.title} desc={todo.desc}/>
        })
      }

      <DarkNewTodo todo={todo}/>


    </div>
  )
}

// creating button component separate 
 
// function CustomButton(props) {

//   function onclickhandler() {
//     // right way to set state variables 
//     props.setCount(props.count +1)

//   }
//   return <button onClick={onclickhandler}>
//     counter {props.count}
//   </button>
  
// }

//// creating Todo component 



export default App
