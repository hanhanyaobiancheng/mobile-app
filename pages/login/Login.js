import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
    View,
    TextInput,
    Alert,
    Image,
} from 'react-native';

const a = (
    <ScrollView
        contentContainerStyle={{ flex: 1, paddingVertical: 20 }} // 非常重要，让ScrollView的子元素占满整个区域
        keyboardDismissMode="on-drag" // 拖动界面输入法退出
        // keyboardShouldPersistTaps={false} // 点击输入法以外的区域，输入法退出 不加这两句也可以实现点击空白处收回键盘
        // scrollEnabled={false} // 当值为false的时候，内容不能滚动，默认值为true
    >
    </ScrollView>
);

export default class Login extends Component {
    state = {
        showErrorMessage: false,
    };

    clickLoginBtn = () => {
        const {username, password} = this.state;
        if (username === 'admin' && password === '111111') {
            return this.props.navigation.navigate('home');
            // Alert.alert('登录成功！');
        } else {
            this.setState({
                showErrorMessage: true,
            });
        }
    };

    render() {
        const {
            showErrorMessage,
        } = this.state;
        return (
            <View style={{flex: 1}}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#fff'}}
                >
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginLeft: 10,
                                marginTop: 10,
                                resizeMode: 'contain'
                            }}
                            source={require('./logo.png')}
                        />
                        <Text style={{
                            color: '#03a9f4',
                            fontSize: 25,
                            lineHeight: 100,
                            fontWeight: 'bold'}}>星宿管理系统</Text>
                    </View>
                    <View style={{
                        backgroundColor: '#fff'}}>
                        <View
                            style={{
                                borderBottomWidth: 5 / PixelRatio.get(),
                                borderColor: 'rgb(208,208,208)',
                                flexDirection: 'row',
                                height: 80,
                            }}
                        >
                            <Text
                                style={{
                                    flex: 1,
                                    lineHeight: 80,
                                    fontSize: 18,
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}
                            >
                                账号:
                            </Text>
                            <TextInput
                                style={{
                                    flex: 5,
                                    marginRight: 10,
                                    lineHeight: 44,
                                    fontSize: 18,
                                }}
                                placeholder="请输入账号"
                                clearButtonMode="while-editing"
                                secureTextEntry={false}
                                onChangeText={(text) => {
                                    this.setState({
                                        username: text
                                    });
                                }}
                                value={this.state.username}
                            />
                        </View>
                        <View
                            style={{
                                borderBottomWidth: 5 / PixelRatio.get(),
                                borderColor: 'rgb(208,208,208)',
                                flexDirection: 'row',
                                height: 80
                            }}
                        >
                            <Text style={{
                                flex: 1,
                                lineHeight: 80,
                                fontSize: 18,
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontWeight: 'bold'}}>密码:</Text>
                            <TextInput
                                style={{
                                    flex: 5,
                                    marginRight: 10,
                                    fontSize: 18,
                                    lineHeight: 44,
                                }}
                                placeholder="请输入密码"
                                clearButtonMode="while-editing"
                                secureTextEntry
                                onChangeText={(text) => {
                                    this.setState({
                                        password: text
                                    });
                                }}
                                value={this.state.password}
                            />
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{
                                marginTop: 30,
                                marginLeft: 10,
                                marginRight: 10,
                                height: 44,
                                borderRadius: 5,
                                backgroundColor: '#03a9f4',
                                overflow: 'hidden',
                            }}
                            onPress={() => this.clickLoginBtn()}
                        >
                            <Text style={{
                                fontSize: 22,
                                textAlign: 'center',
                                color: 'white',
                                lineHeight: 44,
                                fontWeight: 'bold'}}>登 录</Text>
                        </TouchableOpacity>
                        {
                            showErrorMessage ?
                                <Text
                                    style={{
                                        color: 'red',
                                        textAlign: 'center',
                                        fontSize: 18,
                                        lineHeight: 30
                                    }}>账号或密码错误</Text>
                                :
                                null
                        }
                    </View>
                </View>
            </View>
        );
    }
}