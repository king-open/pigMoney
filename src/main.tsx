import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.tsx';
import {ErrorPage} from './components/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<div>root</div>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/1',
    element:<div>1</div>
  }
])

const div = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(div)
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
)

