import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployers from './components/ListEmployers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployerComponenet from './components/AddEmployerComponenet'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/** //the path is the link to the route && the element is the component that will be rendered */}
      <Route path="/" element={<ListEmployers />} />
      <Route path="/employers" element={<ListEmployers/>}/>
      <Route path="/addEmployer" element={<AddEmployerComponenet/>}/>
      <Route path="/updateEmployer/:id" element={<AddEmployerComponenet/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
