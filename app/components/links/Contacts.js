import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Header from '../../Header'

export default class Contacts extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Contacts'
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
      <Header context={this}/>
        <ElevatedView elevation={4} style={styles.stayElevated} />
      </View>
    );
  }
}


var styles = StyleSheet.create({
  stayElevated: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'white'
  }
});




