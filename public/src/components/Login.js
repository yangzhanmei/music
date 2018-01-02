import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class Login extends Component {
    componentWillMount() {
        this.props.showHello();
    }


    render() {
        return (
            <View>
                <Text>{this.props.hello}</Text>
            </View>
        );
    }
}
