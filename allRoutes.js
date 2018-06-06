import { createStackNavigator } from 'react-navigation';
import Login from './pages/login/Login';
import Home from './pages/first/home';

export default createStackNavigator(
    {
        login: {
            screen: Login,
        },
        home: {
            screen: Home,
        },
    },
    {
        initialRouteName: 'login',
    }
);


