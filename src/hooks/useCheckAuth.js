import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { startLoadViajes } from "../store/viajes/thunk";

export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged( FirebaseAuth, async(user) => {
            if( !user ) {

                dispatch( startLoadViajes());
                
                return dispatch(logout());
            } 

            const { uid, email, displayName } = user;

            dispatch( login({uid, email, displayName}) );

            dispatch( startLoadViajes());
        })

    }, [])
    
    return {
        status
    }
}