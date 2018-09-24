import * as sessionApi from '../../service/api/session.api';
import storeRedux from "../../store/reduxStore";

interface LogOut {
    type: "LOGOUT",
    payload: Promise<any>
}



export function logout() {
    return {
        type: 'LOGOUT',
        payload: sessionApi.logOut()
    }
}

export type AppAction = LogOut;
//
// export function isAuthenticate() : IsAuthenticate {
//     let ticket =  storeRedux.getState().session.ticket;
//     return {
//         type: "IS_AUTHENTICATE",
//         payload: ticket
//     }
// }