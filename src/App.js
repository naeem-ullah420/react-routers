import React from 'react'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/signup' element={<SignUpPage/>} />
                    <Route path='/login' element={<LoginPage/>} />
                </Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App