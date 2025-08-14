import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App