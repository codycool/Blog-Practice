import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

let storeEnhancers;

if(process.env.NODE_ENV === 'production'){
    storeEnhancers = compose(
        applyMiddleware(sagaMiddleware)
    )
}else{
    storeEnhancers = compose(
        applyMiddleware(sagaMiddleware),
    )
}

export default function configureStore(initialState={}){
    const store = createStore(rootReducer, initialState, storeEnhancers)
    sagaMiddleware.run(rootSaga)
    if(module.hot && process.env.NODE_ENV !== 'production') {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}
