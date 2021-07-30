import { BEGIN_LOGIN, LOGIN_SUCCESS, ERROR_LOGIN } from "./actionCreators.js"

const initialState = {
    data: '',
    initialState: true
};


export default function counter(state = initialState, action) {
    switch (action.type) {
        case BEGIN_LOGIN:
        console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
            return {
                data: '',
                pending: true,
                error: null,
                initialState: false
            }
        case LOGIN_SUCCESS:
            return {
                data: action.payload.email,
                pending: false,
                error: null,
                initialState: false
            }
        case ERROR_LOGIN:
            return {
                data: '',
                pending: false,
                error: action.payload.error,
                initialState: false
            }
        default:
            return state
    }
}

