import { useState } from 'react'

import './App.css'
import { set } from 'mongoose'

function App() {

  return (
    <div>

<Count  ></Count>
    </div>
  )
}


function Count() {
  const [count, setCount] = useState(0)
 
  
  return(
    <div>

      {count}
<Button count={count} setCount={setCount}></Button>
      
    </div>
  )
}

function Button({setCount,count}) {


  return (
    <div>
      <button onClick={
        ()=>{
        setCount(count+1)
        }
      }>Increse</button>
      <button onClick={
        ()=>{
          setCount(count-1)
        }
      }  >Decrease</button>
    </div>
  )
  
}

export default App
