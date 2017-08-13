import React from 'react';
import { View, Button, StatusBar } from 'react-native';


export default class GoalsPresent extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Goals'
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}