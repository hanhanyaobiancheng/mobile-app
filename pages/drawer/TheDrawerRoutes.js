import {createDrawerNavigator} from 'react-navigation';
import TheFirstDrawer from './TheFirstDrawer';
import TheSecondDrawer from './TheSecondDrawer';

export default createDrawerNavigator({
  home: {
    screen: TheFirstDrawer,
  },
  one: {
    screen: TheSecondDrawer,
  },
});
