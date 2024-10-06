import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { JobsAtom, MsgATom, networkAtom, NotiATom } from "./atoms"


function App() {


  return(
    <div>
      <RecoilRoot>
      <Nameapp/>

      </RecoilRoot>
    </div>
  )

}

function Nameapp() {
  
  const networkcount = useRecoilValue(networkAtom)
  const finalval = networkcount >=100 ? "99+":networkcount

  const noticount = useRecoilValue(NotiATom)
  const jobcount = useRecoilValue(JobsAtom)
  const [msgcount,setMsgCount] = useRecoilState(MsgATom)




  return (
    <>
   <button>Home</button>

   <button>mynetwork({finalval})</button>
   <button>msg({msgcount})</button>
   <button>Jobs({jobcount})</button>
   <button>Notifications ({noticount})</button>

   <button onClick={()=>{
    setMsgCount(msgcount+1)
   }}>Me</button>
    </>
  )
}
export default App
