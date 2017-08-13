import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Contacts from './links/Contacts';
import Health from './links/Health';
import Study from './links/Study';

const Links = TabNavigator({
  Contact: {
    screen: Contacts,
  },
  Study: {
    screen: Study,
  },
  Health: {
    screen: Health,
  },
}, {
  tabBarOptions: {
    tabBarPosition: 'bottom',
    activeTintColor: '#ffffff',
    inactiveTintColor: '#ffffff',
    style: {
      backgroundColor: '#28487B'
    }
  },
});

export default Links;