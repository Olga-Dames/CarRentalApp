import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import App from './components/App/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
   <BrowserRouter>
      <App />
    </BrowserRouter>
   </ThemeProvider>
  </React.StrictMode>
)
