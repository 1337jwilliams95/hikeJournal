import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class GearMiscScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>GearMiscScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default GearMiscScreen;
