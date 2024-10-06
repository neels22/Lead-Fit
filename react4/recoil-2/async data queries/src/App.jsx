import { useState ,useEffect} from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { notifications, totalNoti } from "./atoms";

import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     

     <RecoilRoot>
      <MainApp/>
     </RecoilRoot>
    </>
  )
}



function MainApp() {

  const [networkcount,setNetworkCount] = useRecoilState(notifications)
  const totalnoti = useRecoilValue(totalNoti)

  
  // useEffect(() => {
    
  //   axios.get("")
  //   return(res =>{
  //     setNetworkCount(res.data)
  //   })

  // }, [])
  // this is the ugly way to do it 
  // we move the backend req logic in the recoil file 


  return(
    <div>
      <nav>
        <button>Home</button>
        <button>My Network ({networkcount.network})</button>
        <button>Messages ({networkcount.messaging})</button>
        <button>Jobs ({networkcount.jobs})</button>
        <button>Notifications ({networkcount.notifications})</button>

        <button>Total Notifications ({totalnoti})</button>
      </nav>

    </div>
  )

}
export default App
