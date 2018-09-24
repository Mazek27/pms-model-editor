import axios from "axios"

export function logIn(user: string, pass: string) {
    // return new Promise((resolve, reject) => {
    //     axios.post('/service/auth/login', { user: user, pass: pass })
    //         .then(response => {
    //             resolve({
    //                 username: user,
    //                 ticket: response.data
    //             })
    //         }).catch(reject);
    // })

    const session = {
        username: user,
        ticket: `session_made_on_${Date.now()}`
    }
    localStorage.setItem('session', JSON.stringify(session))
    localStorage.setItem("authorization", JSON.stringify(session.ticket))
    return Promise.resolve(session)
}

export function logOut() {
    localStorage.removeItem("authorization")
    return Promise.resolve(true);
}