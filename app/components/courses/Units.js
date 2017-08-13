import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Header from '../../Header'

export default class Badges extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Units'
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
      <Header context={this}/>
        <Text>Units</Text>
      </View>
    );
  }
}