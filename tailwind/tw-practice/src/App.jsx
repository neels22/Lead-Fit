import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {


  return (
    <>

    <div className='grid grid-cols-3 gap-2'>
    <RevenueCard title={"Amount pending"}  orderCount={13} Amount={"123,234.34"} />
    <RevenueCard title={"Amount pending"}  orderCount={13} Amount={"123,234.34"} />
    <RevenueCard title={"Amount pending"}  orderCount={13} Amount={"123,234.34"} />
    </div>





    </>
  )
}

export default App
