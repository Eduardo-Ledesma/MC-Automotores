import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/AppProvider.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Index from './pages/Index.jsx'
import About from './pages/About.jsx'
import Cars from './pages/Cars.jsx'
import CarDetails from './pages/CarDetails.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'cars',
        element: <Cars />
      },
      {
        path: 'cars/:id',
        element: <CarDetails />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
)
