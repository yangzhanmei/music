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

export default class Login extends Component {

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <TextInput style={{height: 40}} placeholder="用户名"/>
                <TextInput style={{height: 40}} placeholder="密码"/>
                <Button color='#d74047' title="登录" onPress={() => {
                    // navigate('HomePage');
                }}/>
                <View style={styles.flexSpace}>
                    <Text style={styles.noAccount} onPress={() => {
                        navigate('Register');
                    }}>没有账号？去注册</Text>
                    <Text style={styles.forgetPassword}>忘记密码</Text>
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
    noAccount: {
        fontSize: 14,
        color: "#08c",
        flex: 3,
        paddingLeft: 10
    },
    forgetPassword: {
        fontSize: 14,
        color: "#08c",
        flex: 1
    }
});
