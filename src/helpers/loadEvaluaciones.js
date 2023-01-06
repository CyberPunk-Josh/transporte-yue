import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadEvaluaciones = async() => {

    const collectionRef = collection( FirebaseDB, 'evaluaciones/transporte-yue-evaluaciones/evaluaciones');
    const docs = await getDocs(collectionRef);

    const evaluaciones = [];
    docs.forEach( doc => {
        evaluaciones.push({
            id: doc.id,
            ...doc.data()
        })
    })

    return evaluaciones;
}