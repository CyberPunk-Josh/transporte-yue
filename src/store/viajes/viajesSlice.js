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
        },
        updateViaje: (state, action) => {
            state.isSaving = false;
            state.viajes = state.viajes.map((viaje) => {
                if(viaje.id === action.payload.id) {
                    return action.payload;
                }

                return viaje;
            })

            state.messageSaved = `Trip has been updated`;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setViajes,savingNewViaje, addNewViaje, deleteViajeById, updateViaje } = viajesSlice.actions;