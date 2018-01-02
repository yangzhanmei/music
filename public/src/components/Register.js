import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Alert
} from 'react-native';

export default class Register extends Component {

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <TextInput style={{height: 40}} placeholder="用户名"/>
                <TextInput style={{height: 40}} placeholder="密码"/>
                <TextInput style={{height: 40}} placeholder="确认密码"/>
                <Button onPress={() => {
                    navigate('Login');
                }}
                        color='#d74047' title="注册"/>
                <View style={styles.flexSpace}>
                    <Text style={styles.account} onPress={() => {
                        navigate('Login');
                    }}>已有账号，去登录</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 35
    },
    flexSpace: {
        flexDirection: 'row',
        paddingTop: 10
    },
    account: {
        fontSize: 14,
        color: "#08c",
        justifyContent: 'flex-end',
        paddingLeft: 10
    }
});
