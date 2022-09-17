import { Navigate, Route, Routes } from 'react-router-dom'
import { MainApp } from '../pages/Inicio/MainApp'
import { Nosotros } from '../pages/Nosotros'

export const WebRoutes = () => {
  return (
    <Routes>
        <Route path="inicio" element={<MainApp />} />
        <Route path="nosotros" element={<Nosotros />} />

        <Route path="/*" element={ <Navigate to="/user/inicio" />} />
    </Routes>
  )
}
