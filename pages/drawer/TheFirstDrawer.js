import React, {Component} from 'react';
// import {createDrawerNavigator} from 'react-navigation';
import {Button} from 'react-native';


export default class TheFirstDrawer extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('home')}
        title="Go to home"
      />
    );
  }
}
