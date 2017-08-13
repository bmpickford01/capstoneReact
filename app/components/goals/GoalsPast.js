import React from 'react';
import { View, Button, StatusBar } from 'react-native';
import Header from '../../Header'

export default class GoalsPast extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Goals'
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
      <Header context={this}/>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}