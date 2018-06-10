// import React, {Component} from 'react';
// import {
//     Alert,
//     Button,
//     View,
// } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
// import * as ajax from '../../commons/ajax/promise-ajax';
// import baseUrl from '../../commons/local-ajax-base-url';
// import TabPage from '../tab/TabRoutes';
import One from '../tab/One';
import Two from '../tab/Two';
import DetailsScreen from '../tab/DetailPage';

const HomeStack = createStackNavigator(
    {
        One: One,
        Details: DetailsScreen,
    },
    {
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false,
            headerTitle: '首页',
        },
    }
);

const TwoStack = createStackNavigator(
    {
        Two: Two,
        Details: DetailsScreen,
    },
);

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Two: TwoStack,
  },
  {
    /* Other configuration remains unchanged */
  }
);



// export default class ButtonComponent extends Component {
//     state = {};

//     onButtonPress = () => {
//         ajax.get('/v1/parameter').then(res => {
//             console.warn(res);
//             Alert.alert(`Button has been pressed!${res.businessDay}`);
//         });
//     };

//     render() {
//         return (
//             // <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//             //     <Button
//             //         onPress={this.onButtonPress}
//             //         title="This looks great!"
//             //         accessibilityLabel="This sounds great!"
//             //         style={{marginRight: 5, marginTop: 200}}
//             //     />
//             //     <Button
//             //         onPress={this.onButtonPress}
//             //         title="Ok!"
//             //         color="#841584"
//             //         accessibilityLabel="Ok, Great!"
//             //     />
//             //     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//             //     <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//             //     <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//             // </View>

//             <TabPage
//                 naviga={this.props.navigation}
//             />
//         );
//     }
// }