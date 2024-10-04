import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";



function App() {

  
  return (
    <div>
        <Count />
    </div>
  );
}

function Count() {
  return (
    <div>
<RecoilRoot>

      <CountRender />
      <Button />
      </RecoilRoot>

    </div>
  );
}

function CountRender() {

  const count = useRecoilValue(countAtom)

  return (
    <div>
      {count}
    </div>
  );
}

function Button() {

const [ count,setCount] = useRecoilState(countAtom)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
