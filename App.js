import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './src/navigators/MainNavigator';

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
