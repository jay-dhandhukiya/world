import React from 'react'
import './App.css'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import AppLeyout from './components/Leyout/AppLeyout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './components/Leyout/CountryDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLeyout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/country/:id',
        element: <CountryDetails />,
      },
      {
        path: '/country',
        element: <Country />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
