



import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import { BrowserRouter, Route, Routes,useNavigate } from 'react-router-dom'

function App() {


  return (

<div>
  
    <BrowserRouter>
        
        <Appbar />

  <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/landing' element={<Landing/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar() {

  const navigate = useNavigate()

  return(

    <div>
      <div >
        hi this is from the div
        <button onClick={()=>{
          navigate("/landing")
        }}>landing page</button>
        <button onClick={()=>{
          
          navigate("/dashboard")

        }} >dashboard</button>
      </div>
      <br />
      </div>
      



  )
}

export default App
