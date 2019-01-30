import { combineReducers } from 'redux';
import { auth } from './auth';
import { combine } from './combine';
import { articles } from './article';


const appReducer = combineReducers({
    auth,
    articles,
    combine,
})

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_NORMAL') {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer
