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

    constructor(props) {
        super(props);
        this.state = {userName: '', password: ""};
    }

    login(navigate) {
        this.props.login({userName: this.state.userName, password: this.state.password}, () => {
            if (this.props.information) {
                navigate('Homepage');
            }
        });
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <TextInput style={{height: 40}} placeholder="用户名"
                           onChangeText={(userName) => this.setState({userName})}/>
                <TextInput style={{height: 40}} placeholder="密码" secureTextEntry={true}
                           onChangeText={(password) => this.setState({password})}/>
                <Button color='#d74047' title="登录" onPress={this.login.bind(this, navigate)}/>
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
