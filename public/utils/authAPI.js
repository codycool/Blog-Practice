import {post, get} from './fetch';

const auth = {
    signIn(formData) {
        return post('/v1/auth/signin', formData)
    },
    loggedIn() {
        return !!localStorage.token
    },
    logOut() {
        localStorage.removeItem('token')
    },
    setToken(token) {
        const serializedState = JSON.stringify(token)
        localStorage.setItem('token', serializedState)
    },
    getToken() {
        try {
            const serializedState = localStorage.getItem('token')
            if(serializedState === null){
                return undefined
            }
            return JSON.parse(serializedState)
        } catch (err) {
            return undefined
        }
    }
}

export default auth

    
