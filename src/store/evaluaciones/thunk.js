import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadEvaluaciones } from "../../helpers/loadEvaluaciones";
import { addNewEvaluacion, savingNewEvaluacion, setEvaluacion, updateEvaluacion, deleteEvaluacionById } from "./evaluacionesSlice"


export const startNewEvaluacion = ({nombre, email, comentario, rating}) => {
    return async (dispatch) => {
        dispatch(savingNewEvaluacion());

        const newEvaluacion = {
            nombre: nombre,
            email: email,
            comentario: comentario,
            rating: rating,
            mostrar: false,
        }

        const newDoc = doc( collection( FirebaseDB, 'evaluaciones/transporte-yue-evaluaciones/evaluaciones'));
        await setDoc( newDoc, newEvaluacion );

        // Adding id to the record:
        newEvaluacion.id = newDoc.id;
        const listEvaluaciones = await loadEvaluaciones();

        dispatch(addNewEvaluacion());
        dispatch(setEvaluacion(listEvaluaciones));
    }
}

export const startLoadEvaluaciones = () => {
    return async (dispatch) => {
        const listEvaluaciones = await loadEvaluaciones();

        dispatch(setEvaluacion(listEvaluaciones));
    }
}

export const startUpdateEvaluacion = (evaluacion) => {
    return async (dispatch) => {

        dispatch( savingNewEvaluacion() );

        // id from evaluacion
        const { id } = evaluacion;

        const evaluacionToFirestore = {
            id: evaluacion.id,
            comentario: evaluacion.comentario,
            email: evaluacion.email,
            nombre: evaluacion.nombre,
            rating: evaluacion.rating,
            mostrar: !evaluacion.mostrar,
        };

        delete evaluacionToFirestore.id;

        const docRef = doc(FirebaseDB, `evaluaciones/transporte-yue-evaluaciones/evaluaciones/${id}`);
        await setDoc( docRef, evaluacionToFirestore, { merge: true } );

        dispatch( updateEvaluacion(evaluacion) );
    }
}

export const deleteEvaluacion = (evaluacion) => {
    return async (dispatch) => {
        const {id} = evaluacion;

        // Delete evaluacion from firebase
        const docRef = doc(FirebaseDB, `evaluaciones/transporte-yue-evaluaciones/evaluaciones/${id}`);

        await deleteDoc(docRef);

        dispatch( deleteEvaluacionById(id) );
    }
}
