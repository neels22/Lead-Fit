import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className='grid  grid-cols-12'>

        <div className='bg-blue-500 col-span-12 md:col-span-5 '>
          first 
        </div>

        <div className='bg-red-600 col-span-12 md:col-span-5 md:bg-yellow-400' >
          second
        </div>

        <div className='bg-blue-500 col-span-12 md:col-span-5' >
          third
        </div>

        <div className='bg-blue-500 col-span-12 md:col-span-5'>
          third
        </div>
        <div className='bg-blue-500 col-span-12 md:col-span-5'>
          third
        </div>

        
      </div>
    </>
  )
}

export default App
