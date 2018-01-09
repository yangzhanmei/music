import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    PixelRatio,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

var navigation = null;

export default class SearchMusic extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {text: '', show: false, musicList: []};
        navigation = this.props.navigation;
    }

    textChange(text) {
        this.setState({
            show: text !== "" ? true : false,
            text: text
        });
        this.props.getMusicList({text: this.state.text}, () => {
            this.setState({
                musicList: this.props.musicList !== "" ? this.props.musicList : []
            });
        });
    }

    hideList(text) {
        this.setState({
            show: false,
            text: text
        });
    }

    _keyExtractor = (item, index) => index;

    createEmptyView() {
        return (
            <Text style={{fontSize: 12, alignSelf: 'center'}}>没有数据哦！</Text>
        );
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{flex: 10}}
                                  activeOpacity={0.5}
                                  onPress={() => {
                                      this.setState({
                                          text: item
                                      });
                                  }}>
                    <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    render() {

        return (
            <View>
                <View style={styles.topContainer}>
                    <Button style={styles.icon} onPress={() => {
                        navigation.navigate('Homepage');
                    }}>
                        <Image style={styles.image} source={require('../../images/back.png')}/>
                    </Button>
                    <View style={styles.searchBox}>
                        <TextInput
                            keyboardType='web-search'
                            placeholder='搜索歌曲'
                            style={styles.inputText}
                            autoFocus={true}
                            value={this.state.text}
                            onChangeText={this.textChange.bind(this)}/>
                    </View>
                    <Button style={styles.icon} onPress={() => {
                        navigation.navigate('MusicInformation', {
                            music: this.state.text,
                        });
                    }}>
                        <Image style={styles.image} source={require('../../images/search.png')}/>
                    </Button>
                </View>
                <FlatList style={styles.flatList}
                          data={this.state.musicList}
                          ref={(flatList) => this._flatList = flatList}
                          ListEmptyComponent={this.createEmptyView()}
                          keyExtractor={this._keyExtractor}
                          getItemLayout={(data, index) => ( {length: 44, offset: (44 + 1) * index, index} )}
                          onEndReachedThreshold={0.1}
                          renderItem={this._renderItem}
                />
            </View>
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
    searchBox: {
        height: 30,
        flexDirection: 'row',
        flex: 9,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 5
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
    },
    list: {
        marginTop: 1 / PixelRatio.get(),
        marginLeft: 5,
        marginRight: 5,
        height: 200,
        borderColor: '#ccc',
        borderTopWidth: 1 / PixelRatio.get(),
    },
    item: {
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#ddd',
        borderTopWidth: 0,
    }
});