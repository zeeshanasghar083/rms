import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'

const CustomRouter = () => {
  const ProtectedRoutes = () => {
    return true ? <Outlet /> : <Navigate to="/login" />
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route element={<ProtectedRoutes />}>
        {/* All Prodected Routes place Hare */}
        <Route path="/" element={<Home />}></Route>
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  )
}

export default CustomRouter
