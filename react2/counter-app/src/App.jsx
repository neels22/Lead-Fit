

import { useState } from "react"
 
// let state = {
//   count:0
// }
/// this wont work because react does not consider any variable as a state variable
// to make it state variable use -- useState - so that react keeps track of it

function App() {

  // defining the initial state 
  const [count,setCount] = useState(0) // [0,1]

  return (
    <div>
      <CustomButton count={count} setCount ={setCount} ></CustomButton>
    </div>
  )
}

// creating button component separate 
 
function CustomButton(props) {

  function onclickhandler() {
    // right way to set state variables 
    props.setCount(props.count +1)

  }
  return <button onClick={onclickhandler}>
    counter {props.count}
  </button>
  
}

export default App
