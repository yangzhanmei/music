import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {connect, Provider} from 'react-redux';
import configureStore from './store/index';
import {addNavigationHelpers} from 'react-navigation';
import Router from './routers/router';

const store = configureStore();

@connect(state => ({
    nav: state.NavReducer
}))

class AppWithNavigationState extends Component {
    render() {
        return (
            <Router
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

export default class Entry extends Component {

    render() {

        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}
