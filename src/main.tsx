import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import './global.scss'
import 'virtual:uno.css'

const div = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(div)
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
)

