export function DarkNewTodo(props) {
  

  return <div>


  {props.todo.map(function (todo) {
    
    return <div style={{background:"black",color:"white"}}>
      <Todo title={todo.title} desc={todo.desc}/>
    </div>

  })}

  </div>

}