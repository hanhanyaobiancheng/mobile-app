import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';
// import DrawerRoutes from '../drawer/TheDrawerRoutes';


export default class TheFirstPage extends Component {
	static navigationOptions = {
        header: null,
     }; 

	state = {};

	// componentWillMount() {
	// 	alert(this.props.navigation);
	// }

	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>假装这里是首页</Text>
				<View style={{marginTop: 10}}>
					<Button
						onPress={() => {
							// return this.props.navigation.openDrawer();
							return this.props.navigation.navigate('detail');
						}}
						title="查看详情"
					/>
				</View>
				<View style={{marginTop: 10}}>
					<Button
						onPress={() => {
							return this.props.navigation.navigate('drawer');
							// return this.props.navigation.navigate('detail');
						}}
						title="打开侧边导航栏"
					/>
				</View>
			</View>
		);
	}
}
