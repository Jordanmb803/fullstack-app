import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './users';

const store = createStore(reducer, applyMiddleware(promiseMiddleware()));

export default store;