import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    ScrollView,
    Text,
    Image,
    View,
    Alert
} from 'react-native'

const window = Dimensions.get('window');
var navigation = null;

export default class Menu extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        navigation = this.props.navigation;
    }

    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar}
                           source={{uri: 'https://a-ssl.duitang.com/uploads/item/201605/24/20160524132459_h4LRn.thumb.700_0.jpeg'}}/>
                    <Text style={styles.name}>杨战美</Text>
                </View>

                <View style={styles.itemList}>
                    <Text onPress={() => this.props.onItemSelected('UserMusicList')}
                          style={styles.item}>
                        <Image style={styles.image} source={require('../../../images/music.png')}/> 我的歌单
                    </Text>
                    <Text onPress={() => this.props.onItemSelected('个人信息')}
                          style={styles.item}>
                        <Image style={styles.image} source={require('../../../images/user.png')}/> 个人信息
                    </Text>
                    <Text onPress={() => this.props.onItemSelected('UserCommentsList')}
                          style={styles.item}>
                        <Image style={styles.image} source={require('../../../images/comment.png')}/> 我的评论
                    </Text>
                    <Text style={styles.item} onPress={() => {
                        Alert.alert('', '确定退出？',
                            [
                                {
                                    text: "确定", onPress: () => {
                                    navigation.navigate('Login');
                                }
                                },
                                {
                                    text: "取消", onPress: () => {
                                }
                                }
                            ]
                        );
                    }}>
                        <Image style={styles.image} source={require('../../../images/tuichu.png')}/> 退出
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        width: window.width,
        height: window.height,
        backgroundColor: 'white'
    },
    avatarContainer: {
        height: 100,
        marginBottom: 20,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        margin: 25
    },
    name: {
        position: 'absolute',
        left: 80,
        top: 40,
    },
    item: {
        fontSize: 15,
        fontWeight: '300',
        padding: 10
    },
    itemList: {
        margin: 20
    },
    image: {
        margin: 10,
        width: 50,
        height: 50
    }
});
