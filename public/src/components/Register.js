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

    constructor(props) {
        super(props);
        this.state = {username: '', password: "", newPassword: ""};
    }

    register(navigate) {
        const username = this.state.username;
        const password = this.state.password;
        const newPassword = this.state.newPassword;

        if (username === "") {
            alert("请输入用户名！")
        }
        else if (password === "") {
            alert("请输入密码！")
        }
        else if (password !== newPassword) {
            alert("两次密码输入不一致！")
        } else {
            this.props.register({username, password}, () => {

                if (this.props.isSuccess) {
                    navigate('Login');
                }
            });
        }
    }

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <TextInput style={{height: 40}} placeholder="用户名"
                           onChangeText={(username) => this.setState({username})}/>
                <TextInput style={{height: 40}} placeholder="密码"
                           onChangeText={(password) => this.setState({password})}/>
                <TextInput style={{height: 40}} placeholder="确认密码"
                           onChangeText={(newPassword) => this.setState({newPassword})}/>
                <Button onPress={this.register.bind(this, navigate)}
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
