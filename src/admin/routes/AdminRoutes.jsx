import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Admin } from '../pages/Admin'
import { Viajes } from '../pages/Viajes'

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="panel" element={<Admin />} />
        <Route path="viajes" element={<Viajes />} />

        <Route path="/*" element={<Navigate to='/admin/panel' />} />
    </Routes>
  )
}
