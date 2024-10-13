import { useState,useEffect } from 'react'

import axios from 'axios';
import { useIsOnline } from './hooks/useIsOnline';
import { useMousePointer } from './hooks/useMousePointer';



function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response.data);
        setLoading(false)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTodos();
  }, []);

  return [todos,loading]
}

function App() {

const [todos,loading] = useTodos();

const isonline  = useIsOnline()

const mousepointer = useMousePointer()

console.log(isonline)

if (loading) {
  return(
    <div>loading ...</div>
  )
}

  return (
    <>
<div>
    {todos.map(todo=> <Todo todo={todo}/>)}

    your mouse pointer is {mousepointer.x } { mousepointer.y}
    </div>

    </>
  );
}


function Todo({todo}) {
  

  return(
    <div>
      {todo.title}
<br />
      {todo.description}
    </div>
  )
}





export default App
