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

export default class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: _sourceData,
            refreshing: false,
            text: ''
        };
    }

    _footer = () => (
        <View>
            {/*<Text style={{fontSize: 12, alignSelf: 'center'}}>我也是有底线的！</Text>*/}
        </View>
    );

    createEmptyView() {
        return (
            <Text style={{fontSize: 12, alignSelf: 'center'}}>还没有数据哦！</Text>
        );
    }

    _keyExtractor = (item, index) => index;

    show(item) {
        if (!item.like) {
            return <Image style={Styles.likedImage} source={require('../../../images/unGesturesLiked.png')}/>
        } else {
            return <Image style={Styles.likedImage} source={require('../../../images/gesturesLiked.png')}/>
        }
    }

    toggle(item) {
        if (item.like) {
            this.props.unGiveLike(item);
        } else {
            this.props.giveLike(item);
        }
    }

    _renderItem = ({item, index}) => {

        return (
            <View>
                <View style={{flexDirection: "row"}}>
                    <Image style={Styles.image} source={{uri: item.image}}/>
                    <View style={Styles.comment}>
                        <Text style={Styles.nickname}>
                            {item.nickName}
                        </Text>
                    </View>
                    <View style={Styles.likedCountView}>
                        <Text style={Styles.likedCount}>{item.count}</Text>
                    </View>
                    <Button style={Styles.like} onPress={this.toggle.bind(this, item)}>
                        {this.show(item)}
                    </Button>
                </View>
                <Text style={Styles.content}>
                    {item.content}
                </Text>
            </View>
        );
    };

    render() {
        const commentList = this.props.commentList || [];

        return (
            <View style={Styles.container}>
                <FlatList style={Styles.flatList}
                          data={commentList}
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
        );
    }
};

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
    container: {
        height: 375,
    },
    comment: {
        flex: 9,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 8
    },
    nickname: {
        fontSize: 12,
        paddingBottom: 10
    },
    content: {
        fontSize: 12,
        color: "black",
        marginLeft: 50,
        marginBottom: 10,
        marginRight: 5
    },
    flatList: {
        backgroundColor: "white",
        paddingLeft: 10
    },
    likedCountView: {
        width: 60,
        paddingTop: 10,
        alignItems: "flex-end"
    },
    likedCount: {
        fontSize: 10,
        color: "grey",
        paddingBottom: 10,
        width: 100,
        textAlign: "right"
    },
    like: {
        flex: 1,
        paddingTop: 10
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 24,
        marginTop: 10,
        marginLeft: 10
    },
    likedImage: {
        width: 40,
        height: 40,
        marginLeft: 10,
        marginBottom: 5
    }
});