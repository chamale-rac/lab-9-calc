import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Calculator from '@pages/Calculator/Calculator'
import ErrorPage from '@/error-page'

import { AppProvider } from '@/context/context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Calculator />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
)
