import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import ComponentsList from './CommentsList';

var navigation = null;
const uri = 'http://p1.music.126.net/9K22VVnetJqvjMxje_D7Tg==/109951163104045679.jpg';

export default class MusicInformation extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        navigation = this.props.navigation;
    }

    render() {
        return (
            <View>
                <View style={styles.topContainer}>
                    <Button style={styles.icon} onPress={() => {navigation.navigate('Homepage');}}>
                        <Image style={styles.image} source={require('../../images/back.png')}/>
                    </Button>
                    <Text style={styles.title}>详情</Text>
                </View>
                <View style={styles.background}>
                    <Header/>
                    <View style={{height: 20}}>
                        <Text style={{fontSize: 13, color: "black", padding: 10}}>精彩评论 ></Text>
                    </View>
                    <ComponentsList/>
                    <View style={styles.searchBox}>
                        <TextInput
                            keyboardType='web-search'
                            placeholder='评论'
                            style={styles.inputText}/>
                        <Text>发送</Text>
                    </View>
                </View>
            </View>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.headerImage} source={{uri: uri}}/>
                <View style={styles.font}>
                    <Text style={styles.name}>体面</Text>
                    <Text style={styles.artist}>于文文</Text>
                </View>
            </View>
        )
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
    topContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        height: 60,
        backgroundColor: '#d74047',
        alignItems: 'center'
    },
    icon: {
        flex: 1,
        paddingLeft: 10
    },
    title: {
        flex: 8,
        fontSize:18,
        color:"white"
    },
    image: {
        width: 45,
        height: 50
    },
    header: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        backgroundColor: "white"
    },
    headerImage: {
        width: 70,
        height: 75
    },
    font: {
        flex: 5,
        margin: 15
    },
    name: {
        fontSize: 14,
        color: "black"
    },
    artist: {
        paddingTop: 8,
        fontSize: 12
    },
    background: {
        backgroundColor: '#e6e6e6'
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14,
        height: 45,
        marginLeft: 10,
        marginRight: 1
    },
    searchBox: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
        paddingRight: 15
    }
});