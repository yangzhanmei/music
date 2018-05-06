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
        this.state = {
            content: ''
        };
        navigation = this.props.navigation;
    }

    componentWillMount() {
        const {params} = this.props.navigation.state;

        this.props.getMusicInformation(params.musicId);
    }

    _submit() {
        const musicId = this.props.data.music.musicId;

        if (!this.state.content) {
            return alert('留言不能为空')
        }
        else {
            this.props.commentMusic({musicId, isLike: false, count: 0, userId: 1, content: this.state.content}, () => {

            });
            this.setState({content: ''});
        }
    }

    render() {
        const data = this.props.data || [];
        const {music, comment, signer} = data;

        return (
            <View>
                <View style={styles.topContainer}>
                    <Button style={styles.icon} onPress={() => {
                        navigation.navigate('Homepage');
                    }}>
                        <Image style={styles.image} source={require('../../../images/back.png')}/>
                    </Button>
                    <Text style={styles.title}>详情</Text>
                </View>
                <View style={styles.background}>
                    <Header music={music} signer={signer}/>
                    <View style={{height: 20}}>
                        <Text style={{fontSize: 13, color: "black", padding: 10}}>精彩评论 ></Text>
                    </View>
                    <View style={styles.searchBox}>
                        <View style={styles.contentBox}>
                            <TextInput
                                placeholder='请输入评论内容'
                                keybordType='numeric'
                                multiline={true}
                                style={styles.commentContent}
                                onChangeText={(text) => {
                                    this.setState({
                                        content: text
                                    })
                                }}
                                value={this.state.content}
                            >
                            </TextInput>

                            <TouchableOpacity onPress={this._submit.bind(this)} style={styles.submit}>
                                <View style={styles.submitView}>
                                    <Text style={{color: 'white'}}>提 交</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ComponentsList commentList={comment}/>
                </View>
            </View>
        )
    }
}

class Header extends Component {
    render() {
        const music = this.props.music || {};
        const signer = this.props.signer || '';

        return (
            <View style={styles.header}>
                <Image style={styles.headerImage} source={{uri: music.image}}/>
                <View style={styles.font}>
                    <Text style={styles.name}>{music.musicName}-{music.album}</Text>
                    <Text style={styles.artist}>{signer}</Text>
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
        fontSize: 18,
        color: "white"
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
        marginTop: 20,
        height: 50,
        backgroundColor: 'white'
    },
    contentBox: {
        paddingLeft: 20,
        flexDirection: 'row',
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    commentContent: {
        flex: 8,
    },
    submit: {
        flex: 2,
    },
    submitView: {
        height: 30,
        width: 50,
        backgroundColor: '#d74047',
        alignItems: 'center',
        marginTop: 10,
        paddingTop: 5
    }
});