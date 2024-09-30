import { useState , useEffect , useMemo } from 'react'

import './App.css'

//// useMemo

function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputval] = useState(0)

  // let count = 0
  // for (let i = 1; i <=inputValue; i++) {

  //   count = count +i
    
  // }


  //////////////////////////////

// const [final,setFinal] = useState(0)

  // useEffect(()=>{

  //   console.log("useEffect got called")
  //   let finalcount = 0
  //   for (let i = 1; i <=inputValue; i++) {
  
  //     finalcount = finalcount +i
      
  //   }
  //   setFinal(finalcount)


  // },[inputValue])



  /// no point in declaring another state variable and cousing use effect 
  // it causes two re renders to happen
  // useMemo avoid the multiple computations it acts as useEffect but actually it avoid the re-renders and computation to happen again
  
  let count = useMemo(()=>{

    console.log("memo got called")
    let finalcount = 0
    for (let i = 1; i <=inputValue; i++) {
  
      finalcount = finalcount +i
      
    }
    return finalcount

  },[inputValue])



  return (
    <div>

      <input onChange={function (e) {

          setInputval(e.target.value)

      }} type="text" placeholder='put the number ' />
  <br />
sum from 1 to {inputValue} is {count}
      <br />

      {/* when clicked on the button the function that counts the sum is executed again that means the for loop runs again when the button is clicked we dont want that */}
    <button onClick={()=>{
      setCounter(counter+1)
    }}>

    counter {counter}
    </button>

    </div>
  )
}

export default App
