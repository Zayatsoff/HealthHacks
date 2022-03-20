import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        backgroundColor: '#8AD2D2'
      }}>
      <h1>cancare auth 🔒 </h1>
    <h2>Welcome to cancare! You will be able to access cancare after you verify yourself with DeSo</h2>
    </div>    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
