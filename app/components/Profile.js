import React from 'react';
import { View, Button, StatusBar } from 'react-native';
import Header from '../Header'

export default class Profile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile'
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Header context={this}/>
      </View>
    );
  }
}