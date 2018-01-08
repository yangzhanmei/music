import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import Menu from './Menu.js';
import Display from './Display';

var navigation = null;

export default class HomePage extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedItem: '',
        };
        navigation = this.props.navigation;
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({
            isOpen: isOpen
        });
    }

    focusText(){
        navigation.navigate('SearchMusic');
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    };

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected}/>;

        return (
            <SideMenu menu={menu} isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <View style={styles.topContainer}>
                    <Button style={styles.icon} onPress={() => this.toggle()}>
                        <Image style={styles.image} source={require('../../images/icon.png')}/>
                    </Button>
                    <View style={styles.searchBox}>
                        <TextInput
                            keyboardType='web-search'
                            placeholder='搜索歌曲'
                            style={styles.inputText}
                            onFocus={this.focusText.bind(this)}/>
                    </View>
                </View>
                <View style={styles.container}>
                    <Display navigation={navigation}/>
                </View>
            </SideMenu>
        );
    }
}

class Button extends Component {
    _handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this._handlePress.bind(this)} style={this.props.style}>
                <Text style={{color: 'red'}}>{this.props.children}</Text>
            </TouchableOpacity> );
    }
}

const styles = StyleSheet.create({

    icon: {
        flex: 1,
        paddingLeft: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    topContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        height: 60,
        backgroundColor: '#d74047',
        alignItems: 'center'
    },
    searchBox: {
        height: 30,
        flexDirection: 'row',
        flex: 8,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14,
        height: 55
    },
    image: {
        width: 45,
        height: 50
    }
});
