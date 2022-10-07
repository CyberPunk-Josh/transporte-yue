import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminRoutes } from '../admin/routes/AdminRoutes'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { WebRoutes } from '../web/routes/WebRoutes'

export const AppRouter = () => {

  const { status } = useCheckAuth();

  return (
    <Routes>

      {
        (status === 'authenticated') ?
        <Route path="/*" element={ <AdminRoutes />} /> :
        <Route path='/user/*' element={ <WebRoutes /> } />
      }
      
      {/* user routes */}
      <Route path="/*" element={ <Navigate to="/user/inicio" />} />

    </Routes>
  )
}
