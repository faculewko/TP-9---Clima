import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProveedorTema } from './contextos/ContextoTema.jsx'
import { ProveedorUnidades } from './contextos/ContextoUnidades.jsx'
import { ProveedorClima } from './contextos/ContextoClima.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProveedorTema>
      <ProveedorUnidades>
        <ProveedorClima>
          <App />
        </ProveedorClima>
      </ProveedorUnidades>
    </ProveedorTema>
  </StrictMode>,
)
