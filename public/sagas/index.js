import { fork } from 'redux-saga/effects';
import { watchSignInFlow } from './auth';

export default function* rootSaga(){
    yield [
        /* auth */
        fork(watchSignInFlow),
    ]
}