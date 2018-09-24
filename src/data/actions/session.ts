import * as sessionApi from '../../service/api/session.api';

export function authenticate(user: string, pass: string) {
    return {
        type: 'AUTHENTICATE',
        payload: sessionApi.logIn(user, pass)
    }
}

export function logout() {
    return {
        type: 'LOGOUT',
        payload: sessionApi.logOut()
    }
}