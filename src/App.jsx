import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import NoPage from './pages/NoPage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NoPage />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
