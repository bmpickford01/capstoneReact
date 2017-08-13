import React from 'react';
import { View, Button, StatusBar } from 'react-native';


export default class Profile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile'
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