import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class TheThirdPage extends Component {
	state = {};

	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>the third page!</Text>
			</View>
		);
	}
}
