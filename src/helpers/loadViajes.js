import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadViajes = async() => {

    const collectionRef = collection( FirebaseDB, 'viajes/transporte-yue-viajes/viajes');
    const docs = await getDocs(collectionRef);

    const viajes = [];
    docs.forEach( doc => {
        viajes.push({
            id: doc.id,
            ...doc.data()
        })
    })

    return viajes;
}