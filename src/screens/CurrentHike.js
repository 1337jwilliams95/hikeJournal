import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CurrentHike extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CurrentHike</Text>
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
export default CurrentHike;
