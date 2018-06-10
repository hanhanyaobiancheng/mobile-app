import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';


export default class DetailPage extends Component {
	static navigationOptions = {
        headerTitle: "假装是详情页标题",
      }; 

	state = {};

	render() {
		return (
			<View>
				<Text>假装这里是详情页</Text>
				<Button
					onPress={() => this.props.navigation.navigate('login')}
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