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
import _sourceData from "../../constants/musicListData";

var navigation = null;

export default class MusicList extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            data: _sourceData,
            refreshing: false, //初始化不刷新
            text: ''//跳转的行,
        };
        navigation = this.props.navigation;
    }

    componentWillMount() {
        // this.props.getMusicList();
    }

    _footer = () => (
        <Text style={{fontSize: 12, alignSelf: 'center'}}>我也是有底线的！</Text>
    );

    createEmptyView() {
        return (
            <Text style={{fontSize: 40, alignSelf: 'center'}}>还没有数据哦！</Text>
        );
    }

    _keyExtractor = (item, index) => index;

    // itemClick(item, index) {
    //     // const {navigation} = this.props.navigation;
    //     navigation('MusicInformation');
    // }

    toggle(index) {
        let musicList = this.state.data;
        let params = {useId: 1, playCount: 1, love: 1};

        this.setState({data: musicList});
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={{flexDirection: 'row'}}>
                <Text style={Styles.index}>{index + 1}</Text>
                <TouchableOpacity style={{flex: 10}}
                                  activeOpacity={0.5}
                                  onPress={() => {
                                      navigation.navigate('MusicInformation', {id: item.id});
                                  }}>
                    <Text style={Styles.item}>{item.music}</Text>
                    <Text style={Styles.itemInformation}>{item.artist} - {item.album}</Text>
                </TouchableOpacity>
                <Button style={Styles.like} onPress={this.toggle.bind(this, index)}>
                    <Image style={Styles.image} source={require('../../../images/delete.png')}/>
                </Button>
            </View>
        );
    };

    render() {

        return (
            <View>
                <View style={Styles.topContainer}>
                    <Button style={Styles.icon} onPress={() => {
                        navigation.navigate('Homepage');
                    }}>
                        <Image style={Styles.backImage} source={require('../../../images/back.png')}/>
                    </Button>
                    <Text style={Styles.title}>歌单</Text>
                </View>
                <View>
                    <Header/>
                </View>
                <View style={Styles.container}>
                    <FlatList style={Styles.flatList}
                              data={this.state.data}
                              ref={(flatList) => this._flatList = flatList}
                              ListFooterComponent={this._footer}//footer尾部组件
                              ItemSeparatorComponent={ItemDivideComponent}//分割线组件
                              ListEmptyComponent={this.createEmptyView()}
                              keyExtractor={this._keyExtractor}
                              getItemLayout={(data, index) => ( {length: 44, offset: (44 + 1) * index, index} )}
                              onEndReachedThreshold={0.1}
                              refreshing={this.state.refreshing}
                              onRefresh={() => {
                                  this.setState({refreshing: true});
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
    backImage: {
        width: 45,
        height: 50
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
    container: {
        height: 437,
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
    }
});