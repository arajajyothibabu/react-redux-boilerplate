/**
 * Created by jyothi on 22/8/17.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import { browserHistory } from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware';
import logger from './reduxLogger';
import rootReducer from '../reducers';

const __DEV__ = !(process.env.NODE_ENV === "production");

const reduxRouterMiddleware = routerMiddleware(browserHistory);

function configureStore(initialState) {

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            __DEV__
                ? applyMiddleware(reduxRouterMiddleware, promiseMiddleware, thunk, logger)
                : applyMiddleware(reduxRouterMiddleware, promiseMiddleware, thunk)
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}


export default configureStore;