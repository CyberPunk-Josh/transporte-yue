import { Navigate, Route, Routes } from 'react-router-dom'
import { MainApp } from '../pages/MainApp'

export const WebRoutes = () => {
  return (
    <Routes>
        <Route path="inicio" element={<MainApp />} />

        <Route path="/*" element={ <Navigate to="/user/inicio" />} />
    </Routes>
  )
}
