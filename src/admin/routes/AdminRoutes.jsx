import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Evaluaciones } from '../pages/Evaluaciones'
import { Viajes } from '../pages/Viajes'

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Viajes />} />
        <Route path="/evaluaciones" element={<Evaluaciones />} />

        <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
  )
}
