import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class GearMiscScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>GearMiscScreen</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default GearMiscScreen;