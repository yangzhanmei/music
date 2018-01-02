import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/index';
import Login from './containers/Login';

const store = configureStore();

export default class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <Login/>
            </Provider>
        );
    }
}