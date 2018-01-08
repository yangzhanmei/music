import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Viewpage from './Viewpage';
import MusicList from './MusicList';

var navigation = null;

export default class Display extends Component {
    constructor(props) {
        super(props);
        navigation = this.props.navigation;
    }

    render() {

        return (
            <View>
                <Viewpage/>
                <View style={{height: 20}}>
                    <Text style={{fontSize: 16, color: "black", padding: 10}}>推荐歌单 ></Text>
                </View>
                <MusicList navigation={navigation}/>
            </View>
        )
    }
}