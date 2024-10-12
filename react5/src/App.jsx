import { useState,useEffect } from 'react'

import axios from 'axios';

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

  return [todos,loading];
}

function App() {

const [todos,loading] = useTodos();


if (loading) {
  return(
    <div>
      loading...
    </div>
  )
}

  return (
    <>

    {todos.map(todo=> <Todo todo={todo}/>)}

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
