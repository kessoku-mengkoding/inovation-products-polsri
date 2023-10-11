import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Products from './Products.jsx'
import Product from './Product.jsx'
import About from './About.jsx'
import Cart from './Cart.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Payment from './Payment.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/register",
    element: <Register />
  },
  {
    path:"/products",
    element: <Products />
  },
  {
    path:"/product",
    element: <Product />
  },
  {
    path:"/about",
    element: <About />
  },
  {
    path:"/cart",
    element: <Cart />
  },
  {
    path:"/payment",
    element: <Payment />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
