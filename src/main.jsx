import { StrictMode, BrowserRouter, } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/Weather-App---React-JS/'>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
