import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../../auth/pages/Login'
import { MainApp } from '../pages/Inicio/MainApp'
import { Nosotros } from '../pages/nosotros/Nosotros'
import { Viajes } from '../pages/viajes/Viajes'

export const WebRoutes = () => {
  return (
    <Routes>
        <Route path="/inicio" element={<MainApp />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/viajes" element={<Viajes />} />


        <Route path="/login" element={<Login />} />


        <Route path="/*" element={ <Navigate to="/user/inicio" />} />
    </Routes>
  )
}
