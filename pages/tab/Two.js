import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class TheSecondtPage extends Component {
	static navigationOptions = {
        header: null,
     }; 
     
	state = {};

	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>the second page!</Text>
			</View>
		);
	}
}
