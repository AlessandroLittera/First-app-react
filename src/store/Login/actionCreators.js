export const BEGIN_LOGIN = 'BEGIN_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ERROR_LOGIN = 'ERROR_LOGIN';

const beginLogin = () => {
    return {
        type: BEGIN_LOGIN
    }
}

const loginSuccess = (email) => {
    console.log("email: ", email);
    return {
        type: LOGIN_SUCCESS,
        payload: { email }
    }
}

const errorLogin = (error) => {
    return {
        type: ERROR_LOGIN,
        payload: { error }
    }
}


export const checkLogin = (email) => {
    // described below in “Async Action Creators” section.
    return (dispatch) => {
        console.log("dispatch");
        dispatch(beginLogin());
        try {
            console.log("corretto");
            dispatch(loginSuccess(email))
        } catch (error) {
            dispatch(errorLogin(error))
        }

    }
}