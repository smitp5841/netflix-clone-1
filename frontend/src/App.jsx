

import { Route, Routes } from 'react-router-dom'
import './App.css'

import LoginPages from './Pages/LoginPages'
import SignupPage from './Pages/SignupPage'
import HomePage from './Pages/home/HomePage'

function App() {
  

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/signup" element={<SignupPage />} />

      </Routes>
 
    
    </>
  )
}

export default App
