import React from 'react';
import { View, Text, StatusBar } from 'react-native';


export default class CoursesScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Courses'
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text>Courses</Text>
      </View>
    );
  }
}