// //import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './LandingPage/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './LandingPage/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<SignUp />} /> {/* default route */}
    </Routes>
    </>
  )
}

export default App;
