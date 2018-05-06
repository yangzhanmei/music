import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

export default class MusicList extends Component {
    render() {
        const {navigation} = this.props;

        return (
            <View>
                <View style={Styles.topContainer}>
                    <Button style={Styles.icon} onPress={() => {
                        navigation.navigate('Homepage');
                    }}>
                        <Image style={Styles.image} source={require('../../../images/back.png')}/>
                    </Button>
                    <Text style={Styles.title}>歌单</Text>
                </View>
                <View>
                    <Header/>
                </View>
            </View>
        )
    }
}

class Header extends Component {
    render() {

        return (
            <View style={Styles.header}>
                <Image style={Styles.headerImage}
                       source={{uri: 'http://p1.music.126.net/xGrUmDe3FcXjQUx5XUAtiA==/19046839928525979.jpg?param=200y200'}}/>
                <View style={Styles.font}>
                    <Text style={Styles.name}>我喜欢的音乐</Text>
                    <View>
                        <Image style={Styles.avatar} source={require('../../../images/minguo.jpg')}/>
                        <Text style={Styles.artist}>名字</Text>
                    </View>
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

const Styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        height: 60,
        backgroundColor: '#333',
        alignItems: 'center',
        opacity: 1,
    },
    icon: {
        flex: 1,
        paddingLeft: 10
    },
    title: {
        flex: 8,
        fontSize: 18,
        color: "white"
    },
    image: {
        width: 30,
        height: 35
    },
    header: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 20,
        flexDirection: 'row',
        backgroundColor: "#333",
        color: 'white'
    },
    headerImage: {
        width: 80,
        height: 85
    },
    font: {
        flex: 5,
        margin: 15,
    },
    name: {
        fontSize: 16,
        color: 'white'
    },
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 24,
        marginTop: 10,
    },
    artist: {
        position: 'absolute',
        left: 40,
        top: 18,
        color: '#999'
    },
});