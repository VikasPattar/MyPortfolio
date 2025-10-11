// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Dashboard from './pages/dashboard';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/dashboard'} element={<Dashboard/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
