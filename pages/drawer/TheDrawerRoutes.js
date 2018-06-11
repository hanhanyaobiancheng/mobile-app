import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import TheFirstDrawer from './TheFirstDrawer';
import TheSecondDrawer from './TheSecondDrawer';
import One from '../tab/One';

const OneStack = createStackNavigator(
    {
        One: TheFirstDrawer,
        Details: One,
    },
    {
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false,
        },
    }
);

const TwoStack = createStackNavigator(
    {
        Two: TheSecondDrawer,
        Details: One,
    },
);

export default createDrawerNavigator(
  {
    One: OneStack,
    Two: TwoStack,
  },
  {
    /* Other configuration remains unchanged */
  }
);

// export default createDrawerNavigator({
//   home: {
//     screen: TheFirstDrawer,
//   },
//   one: {
//     screen: TheSecondDrawer,
//   },
// });
