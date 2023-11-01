
import { createBrowserRouter } from 'react-router-dom'
import { NotFoundpage } from '../pages/NotFoundPage'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundpage />,
    children: [
      welcomeRoutes
    ],
  },
])
