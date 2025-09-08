import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import 'react-bootstrap/Accordion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordion />
  </StrictMode>,
)
