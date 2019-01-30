import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { actions as authActions, actionTypes as authActionTypes } from '../reducers/auth';
import { actions as combineActions } from '../reducers/combine';
import auth from '../utils/authAPI';

const {
    signInFailure, signInRequest,
    signInSuccess, logoutNormal,
    logoutRequest,
} = authActions

const {
    popupRequest,
    sendingRequest, cancelRequest,
} = combineActions

/**
 ***************** SignIn Flow ******************
 */

function* signFlow(formData){
    try {
        const response = yield call(auth.signIn, formData)
        if(response && response.auth && response.auth.token){
            yield call(auth.setToken, response.auth.token)
            yield put(signInSuccess(response))
            //yield window.location.replace('/')
            //yield put(popupRequest(response))
        }
    } catch (error) {
        yield put(signInFailure())
        yield call(auth.logOut)
        yield put(popupRequest(error))
    }
}

function* combineSignInFlows({formData}){
    yield put(sendingRequest())
    yield call(signFlow, formData)
    yield put(cancelRequest())
}

export function* watchSignInFlow(){
    yield* takeEvery(authActionTypes.SIGNIN_REQUEST, combineSignInFlows)
}

