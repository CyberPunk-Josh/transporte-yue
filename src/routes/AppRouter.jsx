import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminRoutes } from '../admin/routes/AdminRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { WebRoutes } from '../web/routes/WebRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* user routes */}
        <Route path="/*" element={ <Navigate to="/user/inicio" />} />

        <Route path='/user/*' element={ <WebRoutes /> } />

        {/* login */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* admin */}
        <Route path="/admin/*" element={ <AdminRoutes />} />

    </Routes>
  )
}
