import { BrowserRouter } from "react-router-dom";
import { AppTheme } from './theme/AppTheme'
import { AppRouter } from './routes/AppRouter'
import { Provider } from "react-redux";
import { store } from "./store/store";

export const TransporteYue = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  )
}
