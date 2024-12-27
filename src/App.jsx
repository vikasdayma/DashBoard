import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router'
import Dashboard from './components/dashboard/dashboard'
function App() {


  return (
    <div className='bg-gray-300'>
    <Routes >
    <Route path='/*' element={<Dashboard/>} />
    </Routes>
    </div>
  )
}

export default App
