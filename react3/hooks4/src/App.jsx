import { useState , useCallback ,memo} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const inputfuntion =useCallback(()=>{
    console.log("hi from usecallback")
  },[])

  // function inputfuntion(  ) {
  //   console.log("hi from inside the function")
  // }

  return (
    <>
    <ButtonComponent inputfuntion={inputfuntion}/>

    <button onClick={()=>{
      setCount(count+1)
    }}>

      counter {count}

    </button>
     
    </>
  )
}

const ButtonComponent = memo(({inputfuntion}) => {
  console.log("child renders");

  return (
    <div>
      <button>button clicked</button>
    </div>
  );

});



export default App
