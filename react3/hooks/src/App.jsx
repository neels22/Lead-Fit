import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState('')

  useEffect(() => {

    
      fetch("https://fakerapi.it/api/v2/users?_quantity=1&_gender=male")
      .then(async (res) => {
        const json = await res.json()
        // Stringify the JSON response to display it in JSX
        setData(JSON.stringify(json))
      })


   
  }, [])

  return (
    <>
    {data}
    </>
  )
}

export default App
