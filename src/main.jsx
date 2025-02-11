import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Navigate
} from "react-router-dom"
import ProductDetail from './pages/ProductDetail.jsx'
import About from './assets/components/About'
import Services from './assets/components/Services'
import Contact from './assets/components/Contact'
import Layout from './layouts/Layouts'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout><App /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/detail" element={<Layout><ProductDetail /></Layout>} />
      </Routes>
    </Router>
  </StrictMode>,
)