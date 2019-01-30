const initialState ={
    isFetching: false,
    isPopup: false,
    popupMsg: {
        type: 1,
        title: '',
        message: ''
    }
}

export const actionTypes ={
    SENDING_REQUEST: 'SENDING_REQUEST',
    CANCEL_REQUEST: 'CANCEL_REQUEST',
    POPUP_REQUEST: 'POPUP_REQUEST',
    POPUP_CLOSE: 'POPUP_CLOSE'

}

export const actions ={
    sendingRequest: () => {
        return {
            type: actionTypes.SENDING_REQUEST,
        }   
    },
    cancelRequest: () => {
        return {
            type: actionTypes.CANCEL_REQUEST,
        }
    },
    popupRequest: (res) => {
        return {
            type: actionTypes.POPUP_REQUEST,
            res,
        }
    },
    popupClose: () => {
        return { 
            type: actionTypes.POPUP_CLOSE,
        }
    },
}

export const combine = (state = initialState, action) => {
    switch(action.type){ 
        case actionTypes.SENDING_REQUEST:
            return { 
                ...state,
                isFetching: true,
            }
        case actionTypes.CANCEL_REQUEST:
            return { 
                ...state,
                isFetching: false,
            }
        case actionTypes.POPUP_REQUEST:
            return { 
                ...state,
                isPopup: true,
                popupMsg:{
                    type: action.res.type,
                    title: action.res.title,
                    message: action.res.message,
                }
            }
        case actionTypes.POPUP_CLOSE:
            return { 
                ...state,
                isPopup: false,
                popupMsg: null,
            }
        default:
            return state
    }
}
