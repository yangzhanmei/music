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

    show(item) {
        if (!item.like) {
            return <Image style={Styles.image} source={require('../../../images/disliked.png')}/>
        } else {
            return <Image style={Styles.image} source={require('../../../images/liked.png')}/>
        }
    }

    toggle(index) {
        let musicList = this.state.data;
        let params = {useId: 1, playCount: 1, love: 1};

        for (let i = 0; i < musicList.length; i++) {
            if (index === i) {
                if (!musicList[i].like) {
                    this.props.collectMusic({...params, musicId: musicList[i].musicId});
                } else {
                    this.props.unCollectMusic({id: musicList[i].id});
                }
                musicList[i].like = !musicList[i].like;
            }
        }

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
                    {this.show(item)}
                </Button>
            </View>
        );
    };

    render() {

        return (
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