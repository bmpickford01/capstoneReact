import React from 'react';
import { View, Text, StatusBar } from 'react-native';


export default class Badges extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Badges'
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text>Badges</Text>
      </View>
    );
  }
}