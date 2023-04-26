import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Signup from './pages/Signup.tsx'
import Signin from './pages/Signin.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element :<App></App>,
    errorElement : 'Page not found',
    children : [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/signup',
        element : <Signup></Signup>
      },
      {
        path:'/signin',
        element : <Signin></Signin>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}></RouterProvider>
)
