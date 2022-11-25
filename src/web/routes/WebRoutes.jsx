import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../../auth/pages/Login'
import { MainApp } from '../pages/Inicio/MainApp'
import { Nosotros } from '../pages/nosotros/Nosotros'

export const WebRoutes = () => {
  return (
    <Routes>
        <Route path="/inicio" element={<MainApp />} />
        <Route path="/nosotros" element={<Nosotros />} />


        <Route path="/login" element={<Login />} />


        <Route path="/*" element={ <Navigate to="/user/inicio" />} />
    </Routes>
  )
}
