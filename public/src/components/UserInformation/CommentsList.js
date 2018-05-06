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
import _sourceData from "../../constants/commentsListData";

var navigation = null;

export default class CommentsList extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            data: _sourceData,
            refreshing: false,
            text: ''
        };
        navigation = this.props.navigation;
    }

    _footer = () => (
        <View>
            <Text style={{fontSize: 12, alignSelf: 'center'}}>我也是有底线的！</Text>
        </View>
    );

    createEmptyView() {
        return (
            <Text style={{fontSize: 40, alignSelf: 'center'}}>还没有数据哦！</Text>
        );
    }

    _keyExtractor = (item, index) => index;

    toggle(index) {
        let commentsList = this.state.data;
        for (let i = 0; i < commentsList.length; i++) {
            if (index === i) {
                if (commentsList[i].like) {
                    commentsList[i].count--;
                } else {
                    commentsList[i].count++;
                }
                commentsList[i].like = !commentsList[i].like;
            }
        }
        this.setState({data: commentsList});
    }

    _renderItem = ({item, index}) => {

        return (
            <View>
                <View style={{flexDirection: "row"}}>
                    <View style={Styles.comment}>
                        <Text style={Styles.nickname}>
                            2018-02-03 {item.likedcount} <Image style={Styles.likedImage}
                                                                source={require('../../../images/unGesturesLiked.png')}/>
                        </Text>
                    </View>

                    <Button style={Styles.delete} onPress={this.toggle.bind(this, index)}>
                        <Image style={Styles.deleteImage} source={require('../../../images/delete.png')}/>
                    </Button>
                </View>
                <Text style={Styles.content}>
                    {item.content}
                </Text>
            </View>
        );
    };

    render() {
        // const commentList = this.props.commentList || [];

        return (
            <View>
                <View style={Styles.topContainer}>
                    <Button style={Styles.icon} onPress={() => {
                        navigation.navigate('Homepage');
                    }}>
                        <Image style={Styles.backImage} source={require('../../../images/back.png')}/>
                    </Button>
                    <Text style={Styles.title}>评论</Text>
                </View>
                <View>
                    <Header/>
                </View>
                <View style={Styles.container}>
                    <FlatList style={Styles.flatList}
                              data={this.state.data}
                        //使用 ref 可以获取到相应的组件
                              ref={(flatList) => this._flatList = flatList}
                              ListFooterComponent={this._footer}//footer尾部组件
                              ItemSeparatorComponent={ItemDivideComponent}//分割线组件
                        //空数据视图,可以是React Component,也可以是一个render函数，或者渲染好的element。
                              ListEmptyComponent={this.createEmptyView()}
                              keyExtractor={this._keyExtractor}
                        //是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。
                        //如果你的行高是固定的，getItemLayout用起来就既高效又简单.
                        //注意如果你指定了SeparatorComponent，请把分隔线的尺寸也考虑到offset的计算之中
                              getItemLayout={(data, index) => ( {length: 44, offset: (44 + 1) * index, index} )}
                        //决定当距离内容最底部还有多远时触发onEndReached回调。
                        //注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                              onEndReachedThreshold={0.1}
                              refreshing={this.state.refreshing}
                              onRefresh={() => {
                                  this.setState({refreshing: true})//开始刷新
                                  //这里模拟请求网络，拿到数据，3s后停止刷新
                                  setTimeout(() => {
                                      alert('没有可刷新的内容！');
                                      this.setState({refreshing: false});
                                  }, 3000);
                              }}
                              renderItem={this._renderItem}
                    />
                </View>
            </View>
        );
    }
};

class Header extends Component {
    render() {

        return (
            <View style={Styles.header}>
                <Image style={Styles.headerImage}
                       source={{uri: 'http://p1.music.126.net/xGrUmDe3FcXjQUx5XUAtiA==/19046839928525979.jpg?param=200y200'}}/>
                <View style={Styles.font}>
                    <Text style={Styles.name}>我的评论</Text>
                    <View>
                        <Image style={Styles.avatar} source={require('../../../images/minguo.jpg')}/>
                        <Text style={Styles.artist}>名字</Text>
                    </View>
                </View>
            </View>
        )
    }
}

class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{height: 1, backgroundColor: '#e9e9e9'}}/>
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
    backImage: {
        width: 45,
        height: 50
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
    container: {
        height: 437,
    },
    comment: {
        flex: 9,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 8
    },
    nickname: {
        fontSize: 13,
        paddingBottom: 10,
        marginLeft: 10
    },
    content: {
        fontSize: 12,
        color: "black",
        marginLeft: 20,
        marginBottom: 10,
        marginRight: 5
    },
    flatList: {
        backgroundColor: "white",
        paddingLeft: 10
    },
    delete: {
        flex: 1,
        paddingTop: 10
    },
    deleteImage: {
        width: 40,
        height: 40,
        marginLeft: 10,
        marginBottom: 5
    },
    likedImage: {
        width: 40,
        height: 40
    },
});