import React from 'react';
import { View, Button, StatusBar } from 'react-native';


export default class Portfolio extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Portfolio'
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
      </View>
    );
  }
}