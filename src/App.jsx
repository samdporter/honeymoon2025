import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout.jsx'
import MainPage from './pages/MainPage.jsx'
import HoneymoonFund from './pages/HoneymoonFund.jsx'
import Photos from './pages/Photos.jsx'

function App() {
  return (
    <Routes>
      {/* Main page without header/footer layout */}
      <Route path="/" element={<MainPage />} />
      
      {/* Other pages with layout */}
      <Route path="/honeymoon-fund" element={
        <Layout>
          <HoneymoonFund />
        </Layout>
      } />
      
      <Route path="/photos" element={
        <Layout>
          <Photos />
        </Layout>
      } />
    </Routes>
  )
}

export default App