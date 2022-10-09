import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadViajes } from "../../helpers/loadViajes"
import { addNewViaje, savingNewViaje, setViajes, deleteViajeById, updateViaje } from "./viajesSlice";

export const startNewViaje = ({description, destino, personas, precio, urlImage}) => {
    return async ( dispatch) => {
        dispatch(savingNewViaje());

        const newViaje = {
            description: description,
            destino: destino,
            personas: personas,
            precio: precio,
            urlImage: urlImage
        }

        const newDoc = doc( collection(FirebaseDB, 'viajes/transporte-yue-viajes/viajes'));
        await setDoc(newDoc, newViaje);

        // Adding id to the record:
        newViaje.id = newDoc.id;
        const listViajes = await loadViajes();

        dispatch(addNewViaje())
        dispatch(setViajes(listViajes));
    }
}

export const deleteViaje = (viaje) => {
    return async (dispatch) => {
        const { id } = viaje;

        // Delete viaje from firebase
        const docRef = doc(FirebaseDB, `viajes/transporte-yue-viajes/viajes/${id}`);
        await deleteDoc(docRef);

        dispatch( deleteViajeById(id) );
    }
}

export const startLoadViajes = () => {
    return async (dispatch) => {
        const listViajes = await loadViajes();

        dispatch( setViajes(listViajes) );
    }
}

export const startUpdateViaje = (viaje) => {
    return async (dispatch) => {
        dispatch( savingNewViaje() );

        // id from viaje
        const { id } = viaje;

        const viajeToFirestore = {...viaje};

        delete viajeToFirestore.id;

        const docRef = doc(FirebaseDB, `viajes/transporte-yue-viajes/viajes/${id}`);
        await setDoc( docRef, viajeToFirestore, { merge: true } );

        dispatch( updateViaje(viaje) );
    }
}