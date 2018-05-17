import {createStore} from 'redux';
import reducer from './users';

const store = createStore(reducer);

export default store;