const initialState ={
    token: null,
};

export const actionTypes = {
    SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
    SIGNIN_REQUEST: 'SIGNIN_REQUEST',
    SIGNIN_FAILURE: 'SIGNIN_FAILURE',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    LOGOUT_NORMAL: 'LOGOUT_NORMAL',
}

export const actions = {
    signInRequest: (formData) => {
        return {
            type: actionTypes.SIGNIN_REQUEST,
            formData,
        }
    },
    signInSuccess: (response) => {
        return {
            type: actionTypes.SIGNIN_SUCCESS,
            response,
        }
    },
    signInFailure: (error) => {
        return {
            type: actionTypes.SIGNIN_FAILURE,
            error,
        }
    },
    logoutRequest: () => {
        return {
            type: actionTypes.LOGOUT_REQUEST,
        }
    },
    logoutNormal: () => {
        return {
            type: actionTypes.LOGOUT_NORMAL,
        }
    },
}

export const auth = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                token: action.response.token,
            }
        case actionTypes.SIGNIN_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}
