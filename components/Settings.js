import React from 'react';
import { View, StyleSheet, StatusBar, Text, Dimesions } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Dimensions from 'Dimensions';



export default class Settings extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings'
  };
  

  componentDidUpdate(){
    var {height, width} = Dimensions.get('window');
  }
  render() {
    var {height, width} = Dimensions.get('window');
    return (
      <View>
        <StatusBar hidden={true} />
        <ElevatedView elevation={4} style={{width: 100, margin: 10, height: 80, backgroundColor: 'white'}} >
          <Text>Test</Text>
        </ElevatedView >
        <ElevatedView elevation={4} style={styles.stayElevated} >
          <Text>Test</Text>
        </ElevatedView >
        <ElevatedView elevation={4} style={styles.stayElevated} >
          <Text>Test</Text>
        </ElevatedView >
      </View>
    );
  }
}


var styles = StyleSheet.create({
  stayElevated: {
    width: 100,
    height: 80,
    margin: 10,
    backgroundColor: 'white'
  }
});

