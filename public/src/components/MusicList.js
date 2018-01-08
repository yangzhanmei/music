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

var navigation = null;

export default class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this._sourceData,
            refreshing: false, //初始化不刷新
            text: ''//跳转的行,
        };
        navigation = this.props.navigation;
    }

    _footer = () => (
        <Text style={{fontSize: 12, alignSelf: 'center'}}>我也是有底线的！</Text>
    );

    createEmptyView() {
        return (
            <Text style={{fontSize: 40, alignSelf: 'center'}}>还没有数据哦！</Text>
        );
    }

    //此函数用于为给定的item生成一个不重复的key
    //若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标index。
    _keyExtractor = (item, index) => index;

    // itemClick(item, index) {
    //     // const {navigation} = this.props.navigation;
    //     navigation('MusicInformation');
    // }

    show(item) {
        if (!item.like) {
            return <Image style={Styles.image} source={require('../../images/disliked.png')}/>
        } else {
            return <Image style={Styles.image} source={require('../../images/liked.png')}/>
        }
    }

    toggle(index) {
        var musicList = this.state.data;
        for (var i = 0; i < musicList.length; i++) {
            if (index === i) {
                musicList[i].like = !musicList[i].like;
            }
        }
        this.setState({data: musicList})
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={{flexDirection: 'row'}}>
                <Text style={Styles.index}>{index + 1}</Text>
                <TouchableOpacity style={{flex: 10}}
                                  activeOpacity={0.5}
                                  onPress={() => {
                                      // alert(navigation)
                                      navigation.navigate('MusicInformation');
                                  }}>
                    <Text style={Styles.item}>{item.music}</Text>
                    <Text style={Styles.itemInformation}>{item.artist} - {item.album}</Text>
                </TouchableOpacity>
                <Button style={Styles.like} onPress={this.toggle.bind(this, index)}>
                    {this.show(item)}
                </Button>
            </View>
        );
    };

    _sourceData = [
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍",
            like: false
        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍",
            like: false
        },

        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍",
            like: false

        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍",
            like: false

        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍",
            like: false

        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍",
            like: false

        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍",
            like: false

        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍",
            like: false

        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍",
            like: false

        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍",
            like: false

        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍",
            like: false

        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍"
        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍"
        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍"
        },
        {
            music: '爱我一次就好',
            album: "爱我一次就好",
            artist: "黄丽珍"
        }
    ];

    render() {

        return (
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
        height: 395,
        paddingTop: 22
    },
    item: {
        paddingTop: 10,
        fontSize: 15,
        color: "black"
    },
    flatList: {
        backgroundColor: "white",
        paddingLeft: 10
    },
    index: {
        flex: 1,
        paddingLeft: 15,
        paddingTop: 20,
        fontSize: 15
    },
    itemInformation: {
        fontSize: 10,
        paddingTop: 3,
        paddingBottom: 5
    },
    like: {
        flex: 1,
        paddingTop: 18
    },
    image: {
        width: 45,
        height: 50
    }
});