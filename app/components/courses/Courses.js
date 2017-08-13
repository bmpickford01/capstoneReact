import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Header from '../../Header'

export default class CoursesScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Courses'
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
      <Header context={this}/>
        <Text>Courses</Text>
      </View>
    );
  }
}