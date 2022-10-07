import { loadViajes } from "../../helpers/loadViajes"
import { setViajes } from "./viajesSlice";

export const startLoadViajes = () => {
    return async (dispatch) => {
        const listViajes = await loadViajes();

        dispatch( setViajes(listViajes) );
    }
}