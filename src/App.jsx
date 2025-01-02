import { useState } from 'react'
import Home from "./sections/home/home.jsx"
import Header from "./components/header.jsx"
import './App.css'
import Category from './sections/category/category.jsx'


function App() {
 

  return (
    <div className='overflow-auto bg-white h-full'>
      <Header></Header>
      <Home></Home>
      <Category></Category>
    </div>
  )
}

export default App
