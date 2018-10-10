import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import MainNavigator from './src/navigators/MainNavigator';
import store from './src/store/index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <MainNavigator />
      </Provider>
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
