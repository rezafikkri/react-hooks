import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemeContext from './ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext.Provider value="light">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
)
