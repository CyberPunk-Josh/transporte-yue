import { loginWithEmailPassword, logoutFirebase } from '../../firebase/providers';

import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startLoginWithEmailAndPassword = ({ email, password }) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

        const { ok, uid, displayName, errorMessage } = await loginWithEmailPassword({email, password});

        if (!ok) return dispatch( logout({errorMessage}) );

        dispatch( login({ uid, displayName, email}));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout());
    }
}