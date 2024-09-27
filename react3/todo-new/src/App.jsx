import { useState } from 'react'

import './App.css'
import { Button } from './Button'

import { Todo } from './Todo'

let counter = 3 



function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "for two hours"
    },
    {
      id: 2,
      title: "go to gym",
      description: "for two hours"
    },
    {
      id: 3,
      title: "go to gym",
      description: "for two hours"
    },
  ])

  function addTodo() {
    setTodo(
      [...todos, {
        id: counter = counter +1, // make sure to assign a unique id
        title: Math.random(),
        description: "new todo"
      }]
    )
  }

  return (
    <>
      <Button addTodo={addTodo}>Add Todo</Button>

      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}

 {/* this is wrapper component  */}
{/* <CardWrapper innerComponent = {<TextComponent/>}/>
<CardWrapper innerComponent = {<TextComponent/>}/> */}


{/* right way to create a wrapper  */}
      <CardWrapper>
        
              <div>
              hi there
              </div>
        </CardWrapper>

        <CardWrapper>
        
              <div>
              hi there
              </div>
          </CardWrapper>



            <CardWrapper>
    
              <TextComponent/>
           </CardWrapper>

  
    </>
  )
}

function TextComponent() {

  return(
    <>
      <div>
thisi is from text component      </div>
    </>
  )
  
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black" }}>
      {children}
    </div>
  )
}



export default App
