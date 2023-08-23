import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import AuthProvider from './Providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/nexa-vision-consults",
    element: <Home></Home>
  },
  {
    path: "/nexa-vision-consults/login",
    element: <Login></Login>
  },
  {
    path: "/nexa-vision-consults/register",
    element: <Register></Register>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
