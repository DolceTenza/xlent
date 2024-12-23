import React from "react"
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";
const Layout = () => {
  return(
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}




function App()  {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
  ])
  return(
   <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
   </div>
  )
}



export default App;
