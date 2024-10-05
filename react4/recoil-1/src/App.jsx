import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";



function App() {

  
  return (
    <div>
      <RecoilRoot>

        <Count />
  
        </RecoilRoot>
    
    </div>

  );
}

function Count() {
  return (
    <div>

      < CountRender />
        <Button />


    </div>
  );
}

function CountRender() {

  const count = useRecoilValue(countAtom)

  return (
    <div>
      {count}

      <EvenCountRendered/>
    </div>
  );
}

function EvenCountRendered() {

  const isEven = useRecoilValue(evenSelector)

  // const isEven = (count % 2 ==0 )

  // const isEven = useMemo(()=>{
  //   return count%2 ==0
  // },[count])
  /// the above useMemo is replaced with the selectors

  return(
    <div>
      {isEven? "It is even":null}
    </div>
  )
}

function Button() {

  /// button doesnt not need count but we can make it optimised 
  // so we dont need count here 
  // we dont need buttons to re render 
  console.log("button rerender")
// const [ count,setCount] = useRecoilState(countAtom)

const setCount = useSetRecoilState(countAtom)
// we just made this more optimised 

  return (
    <div>
      {/* this line of setCount is optimised for getting the current value  */}
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
