mport {
StackNavigator,
} from 'react-navigation';

import React from 'react';

import Login from './pages/login/Login';
import Home from './pages/first/home';

export default PageRoute = StackNavigator({
//默认加载第一个页面，用来注册需要跳转的页面
	Login: {
		screen: Login,
	},
	Home:{
		screen: Home,
		navigationOptions: {
			header: null,
		},
	}
});