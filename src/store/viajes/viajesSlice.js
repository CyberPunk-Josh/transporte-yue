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
        }
    }
});


// Action creators are generated for each case reducer function
export const { setViajes } = viajesSlice.actions;