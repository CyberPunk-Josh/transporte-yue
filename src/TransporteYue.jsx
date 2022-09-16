import { BrowserRouter } from "react-router-dom";
import { AppTheme } from './theme/AppTheme'
import { AppRouter } from './routes/AppRouter'

export const TransporteYue = () => {
  return (
    <BrowserRouter>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </BrowserRouter>
  )
}
