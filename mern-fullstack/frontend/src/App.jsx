import { useState,useEffect } from 'react'

import './App.css'
import { CreateTodo } from './components/CreateTodo'

import { Todos } from './components/Todos'

function App() {

  const [todos,setTodo] = useState([])


  // why its wrong way to do 
  // infinite requests will go because setTodo calls app - app calls fetch again 
  // this goes on forever 
  useEffect(() => {
    const fetchTodos = async () => {
        try {
            const res = await fetch("http://localhost:3000/todos");
            const json = await res.json();
            setTodo(json.todos);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    fetchTodos();
}, []); 

  return (
    <div>
     hi there

    <CreateTodo></CreateTodo>

    <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
