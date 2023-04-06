import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './component/Leyout/Main'
import Home from './component/Home/Home'
import About from './component/About/About'
import Order from './component/Order/Order'
import Grandpa from './component/PropsDriling/grandpa'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('tshirts.json')
      },
      {
        path: '/review',
        element: <Order></Order>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contex',
        element: <Grandpa></Grandpa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
