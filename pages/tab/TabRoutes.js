// import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import TheFirstPage from './One';
import TheSecondPage from './Two';
import TheThirdPage from './Three';

export default createBottomTabNavigator(
  {
    one: TheFirstPage,
    two: TheSecondPage,
    three: TheThirdPage,
  },
  {
    // navigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let iconName;
    //     if (routeName === 'one') {
    //       iconName = `android-information-circle${focused ? '' : '-outline'}`;
    //     } else if (routeName === 'two') {
    //       iconName = `android-options${focused ? '' : '-outline'}`;
    //     }

    //     // You can return any component that you like here! We usually use an
    //     // icon component from react-native-vector-icons
    //     return <Ionicons name={iconName} size={25} color={tintColor} />;
    //   },
    // }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);