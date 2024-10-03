import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const Dashboard = React.lazy(() => import("./components/Dashboard"))
const Landing = React.lazy(() => import("./components/Landing"))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/landing' element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        hi this is from the div
        <button onClick={() => navigate("/landing")}>Landing page</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      </div>
      <br />
    </div>
  )
}

export default App
