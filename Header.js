import React from 'react';
import NavigationBar from 'react-native-navigation-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'


export default class Header extends React.Component {
   render() {
    return (
      
      <View>
        <StatusBar hidden={true} />
        <NavigationBar 
        title={'testing'}
        height={44}
        titleColor={'#fff'}
        backgroundColor={'#28487B'}
        leftButtonIcon={<Icon size={24} color="white" name="text" />}
        leftButtonTitle={'Open'}
        leftButtonTitleColor={'#fff'}
    />
      </View>
    );
  }
}
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