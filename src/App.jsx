import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from '/public/favicon.ico'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Portfolio from './components/portfolio/Portfolio'


let x=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:'About',element:<About/>},
  {path:'contact',element:<Contact/>},
  {path:'portfolio',element:<Portfolio/>}
  ]},
  
])
function App() {
  
  return<>
  <RouterProvider router={x}></RouterProvider>
  </>
}

export default App
