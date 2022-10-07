import { createSlice } from '@reduxjs/toolkit';

export const viajesSlice = createSlice({
    name: 'viajes',
    initialState: {
        isSaving: false,
        messageSaved: '',
        viajes: []
    },
    reducers: {
        setViajes: (state, action) => {
            state.viajes = action.payload;
        },
        savingNewViaje: (state) => {
            state.isSaving = true;
        },
        addNewViaje: (state, action) => {
            state.viajes.push(action.payload);
            state.isSaving = false;
        },
        deleteViajeById: (state, action) => {
            state.viajes = state.viajes.filter( viaje => viaje.id !== action.payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const { setViajes,savingNewViaje, addNewViaje, deleteViajeById } = viajesSlice.actions;