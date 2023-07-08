import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {FarAwayProvider} from './store/FarAwayContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FarAwayProvider>
      <App />
    </FarAwayProvider>
  </React.StrictMode>,
)
