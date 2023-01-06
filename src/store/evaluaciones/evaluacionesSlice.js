import { createSlice } from '@reduxjs/toolkit';

export const evaluacionesSlice = createSlice({
    name: 'evaluaciones',
    initialState: {
        isSaving: false,
        messageSaved: '',
        evaluaciones: []
    },
    reducers: {
        setEvaluacion: (state, action) => {
            state.evaluaciones = action.payload;
        },
        savingNewEvaluacion: (state) => {
            state.isSaving = true;
        },
        addNewEvaluacion: (state, action) => {
            state.evaluaciones.push(action.payload);
        },
        deleteEvaluacionById: (state, action) => {
            state.evaluaciones = state.evaluaciones.filter( evaluacion => evaluacion.id !== action.payload);
        },
        updateEvaluacion: (state, action) => {
            state.isSaving = false;
            state.evaluaciones = state.evaluaciones.map((evaluacion) => {
                if(evaluacion.id === action.payload.id) {
                    return action.payload;
                }

                return evaluacion;
            })

            state.messageSaved = `Evaluation has been updated`;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setEvaluacion, savingNewEvaluacion, addNewEvaluacion, deleteEvaluacionById, updateEvaluacion} = evaluacionesSlice.actions;