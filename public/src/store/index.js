import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer from '../reducers/index';

export default () => {
    const store = createStore(Reducer, {}, compose(
        applyMiddleware(thunkMiddleware)
    ));

    return store;
}