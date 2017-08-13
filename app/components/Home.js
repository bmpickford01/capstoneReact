import React from 'react';
import { View, Button, StatusBar, Text, Image } from 'react-native';
//import NavigationBar from 'react-native-navbar';
import NavigationBar from 'react-native-navigation-bar';
import Icon from 'react-native-vector-icons/Entypo'


import Header from '../Header'



export default class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  };
  render() {
    return (
      <View>
      <StatusBar hidden={true} />
      <Header context={this}/>
</View>
    )
  }
 
}
