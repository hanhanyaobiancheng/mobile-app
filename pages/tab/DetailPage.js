import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import * as ajax from '../../commons/ajax/promise-ajax';
import service from '../../commons/service/service-hoc';

@service()
export default class DetailPage extends Component {
	static navigationOptions = {
        headerTitle: "假装是详情页标题",
      };

	componentDidMount() {
        let url = 'http://music.163.com/api/playlist/detail?id=3778678&updateTime=-1';
        ajax.get(url).then(res => {
            console.log(66666, res);
        });
        console.log(5555, this.props);
        this.props.$service.musicService.getMusicList().then(res => {
            console.log(77777, res);
        });
        fetch(url)
            .then((data) => {
                console.log(1213, data);
                return data.json()
            })
            .then((res) => {
                console.log(2123, res);
            })
	}

	state = {};

	render() {
		return (
			<View>
				<Text>假装这里是详情页</Text>
				<Button
					onPress={() => {
                        console.log(123);
                        this.props.navigation.navigate('login', {
                        	a: 1,
						});
                    }}
					title='返回重新登录'
				/>
				<View style={{marginTop: 10}}>
					<Button
						onPress={() => this.props.navigation.navigate('home')}
						title='重新回到首页'
					/>
				</View>
			</View>
		);
	}
}
