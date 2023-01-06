import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { evaluacionesSlice } from "./evaluaciones/evaluacionesSlice";
import { viajesSlice } from "./viajes/viajesSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        viajes: viajesSlice.reducer,
        evaluaciones: evaluacionesSlice.reducer,
    }
})