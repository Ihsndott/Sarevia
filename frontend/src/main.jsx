import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Cancel from './pages/Cancel'
import Success from './pages/Success'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Addtocart from './pages/Addtocart'
import Login from './pages/login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './Layouts/Layout'
import Notfound from './pages/Notfound'

const router =  createBrowserRouter ([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<Notfound/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"Shop",
        element:<Shop/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Contact",
        element:<Contact/>
      },
      {
        path:"Login",
        element:<Login/>
      },
      {
        path:"Addtocart",
        element:<Addtocart/>
      },
      {
        path:"Cancel",
        element:<Cancel/>
      },
      {
        path:"Success",
        element:<Success/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className="bg-[#F6F2E1] min-h-screen">
    <RouterProvider router={router}></RouterProvider>
    </div> 
  </StrictMode>,
)
