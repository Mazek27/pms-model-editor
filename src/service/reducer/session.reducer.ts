import { StoreState } from "../../store/storeState";

function initState() {
    let session = localStorage.getItem('session');

    if (session === null) {
        return {
            ticket: "",
            username: ""
        }
    } else {
        return JSON.parse(session);
    }
}

export default (state: StoreState.Session, action: any): StoreState.Session => {
    if (typeof state == "undefined") {
        return initState();
    }

    switch (action.type) {
        case 'AUTHENTICATE_FULFILLED': {
            return { ...action.payload };
        }
        case 'LOGOUT_FULFILLED': {
            return {
                username: "",
                ticket: ""
            };
        }
        default:
            return state;
    }
}