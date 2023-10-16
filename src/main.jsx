import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './routes/Navbar'
import Home from './routes/Home'
import Explore from './routes/explore'
import About from './routes/About'
import Login from './routes/login'
import Register from './routes/Register'
import Camera from './routes/Camera'
import FileUpload from './routes/FileUpload'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "Explore",
        element: <Explore/>
      },
      {
        path: "About",
        element: <About/>
      },
      {
        path: "Login",
        element: <Login/>
      },
      {
        path: "Register",
        element: <Register/>
      },
      {
        path: "About/Explore",
        element: <Explore/>
      },
      {
        path: "Explore/Camera",
        element: <Camera />
      },
      {
        path: "Explore/FileUpload",
        element: <FileUpload />
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)