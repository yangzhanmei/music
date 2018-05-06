import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Homepage from '../containers/HomePage';
import SearchMusic from '../containers/SearchMusic';
import MusicInformation from '../containers/MusicInformation';
import UserMusicList from '../components/UserInformation/MusicList';
import UserCommentsList from '../components/UserInformation/CommentsList';

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
        // Homepage: {
        //     screen: Homepage
        // },
        SearchMusic: {
            screen: SearchMusic
        },
        MusicInformation: {
            screen: MusicInformation
        },
        UserMusicList: {
            screen: UserMusicList
        },
        UserCommentsList: {
            screen: UserCommentsList
        }
    }
);
export default AppNavigator;