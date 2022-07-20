import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import WebsiteLayout from './components/layout/WebsiteLayout'
import AdminLayout from './components/layout/AdminLayout'


function App() {
  const [count, setCount] = useState(0)

  const newLocal = "auto"
  return (
    <div >
      <AdminLayout/>

    </div>
  )
}

export default App
