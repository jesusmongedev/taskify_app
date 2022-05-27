import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TodoProvider } from './utils/TodoProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
)
