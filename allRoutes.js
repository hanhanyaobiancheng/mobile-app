import { createStackNavigator } from 'react-navigation';
import Login from './pages/login/Login';
import Home from './pages/first/home';
import DetailPage from './pages/tab/DetailPage';

export default createStackNavigator(
    {
        login: {
            screen: Login,
        },
        home: {
            screen: Home,
            navigationOptions: {
                gesturesEnabled: false,
                headerTitle: '首页',
            },
        },
        detail: {
            screen: DetailPage,
        },
    },
    {
        initialRouteName: 'home',
    }
);


