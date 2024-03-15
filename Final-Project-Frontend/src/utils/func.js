import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { writable } from 'svelte/store';

export const currentTheme = writable('emerald')
//console.log(currentTheme)

const emptyAuth = {
    "token": "",
    "userId": ""
}

export const loggedIn = writable(false)

export function logOut(evt) {
    localStorage.setItem("auth", JSON.stringify(emptyAuth))
    loggedIn.set(false)
    return true
}

export function getUserId() {
    const auth = localStorage.getItem("auth")
    if (auth) {
        return JSON.parse(auth)["userId"]
    }
    return null

}
export function getTokenFromLocalStorage() {
    const auth = localStorage.getItem("auth")
    if (auth) {
        return JSON.parse(auth)["token"]
    }
    return null
}

export async function isLoggedIn() {
    if (!getTokenFromLocalStorage()) {
        loggedIn.set(true)
        return false
    }
    loggedIn.set(true)
    return true
}