import Icon from 'react-native-vector-icons/Entypo'
import React, {Component} from 'react';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { View, StyleSheet, StatusBar, Text, Dimesions } from 'react-native';


export default class Header extends Component {
  render() {
    return (
      <NavBar style={style}>
        <NavGroup>
          <NavButton onPress={() => this.props.context.props.navigation.navigate('DrawerOpen') }>
            <NavButtonText>
              <Icon size={24} color="white" name="menu" />
            </NavButtonText>
          </NavButton>
        </NavGroup>
        <NavTitle style={style.title}>
          {"QUT"}
        </NavTitle>
<NavGroup>
      </NavGroup>
      </NavBar>
    )
  }
}

style = StyleSheet.create({
  statusBar: {
    backgroundColor: '#28487b',
  },
  navBar: {
    backgroundColor: '#28487b',
  },
  title: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#ffffff',
  },
})
/*
import React from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import { StyleSheet, Text, View } from 'react-native';

export default class LeftNav extends React.Component {
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="black"
        style={{ height: 66, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
      >
        <Tab
          barBackgroundColor="#37474F"
          label="Course"
          icon={<Icon size={24} color="white" name="open-book" />}
        />
        <Tab
          barBackgroundColor="#37474F"
          label="Units"
          icon={<Icon size={24} color="white" name="text" />}
        />
        <Tab
          barBackgroundColor="#37474F"
          label="Badges"
          icon={<Icon size={24} color="white" name="medal" />}
        />
      </BottomNavigation>
    )
  }
}*/