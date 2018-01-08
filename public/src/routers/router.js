import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Homepage from '../components/Homepage';
import SearchMusic from '../components/SearchMusic';

const AppNavigator = StackNavigator(
    {
        Homepage: {
            screen: Homepage
        },
        Login: {
            screen: Login,
            navigationOptions: () => ({
                headerTitle: "登录",
                headerStyle: {
                    backgroundColor: '#d74047'
                },
                headerTitleStyle: {
                    fontSize: 18,
                    color: 'white',
                    alignSelf: 'center'
                },
                headerLeft: null
            })
        },
        Register: {
            screen: Register,
            navigationOptions: () => ({
                headerTitle: "注册",
                headerStyle: {
                    backgroundColor: '#d74047'
                },
                headerTitleStyle: {
                    fontSize: 18,
                    color: 'white',
                    alignSelf: 'center'
                },
                headerLeft: null
            })
        },
        SearchMusic: {
            screen: SearchMusic
        },
    }
);
export default AppNavigator;