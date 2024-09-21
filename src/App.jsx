import { useState } from 'react'
import { Route, Routes } from 'react-router'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Code from './pages/Code'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </main>
    </>
  )
}

export default App
