import React from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import { StyleSheet, Text, View, DrawerLayoutAndroid, TouchableHighlight, Button, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { DrawerItems, DrawerNavigator } from 'react-navigation';
//import { SideMenu, List, ListItem } from 'react-native-elements'
//import LeftNav from './app/LeftNav.js'
import Home from './app/components/Home';
import Courses from './app/components/Courses';
import Goals from './app/components/Goals';
import Portfolio from './app/components/Portfolio';
import Profile from './app/components/Profile';
import Settings from './app/components/Settings';
import Links from './app/components/Links';

const App = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Courses: {
    screen: Courses,
  },
  Goals: {
    screen: Goals,
  },
  Portfolio: {
    screen: Portfolio,
  },
  Links: {
    screen: Links,
  },
  Profile: {
    screen: Profile,
  },
  Settings: {
    screen: Settings,
  },
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  leftMenu: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff'
  },
  leftMenuItem: {
    padding: 15,
    marginRight: 25,
    borderBottomWidth: 1
  }
});
