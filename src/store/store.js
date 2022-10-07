import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { viajesSlice } from "./viajes/viajesSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        viajes: viajesSlice.reducer
    }
})