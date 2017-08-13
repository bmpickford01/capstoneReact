import React from 'react';
import { View, Button, StatusBar, Text } from 'react-native';
//import NavigationBar from 'react-native-navbar';
import NavigationBar from 'react-native-navigation-bar';


import Header from '../Header'



export default class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  };
  render() {
    return (
      <Header />
    )
  }
 
}
