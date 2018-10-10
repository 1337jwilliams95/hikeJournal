import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import { USER_TOKEN } from '../actions/types';

class HikeSettings extends Component {
  logOut = () => {
    AsyncStorage.removeItem(USER_TOKEN);
    this.props.navigation.navigate('auth');
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Log out"
          onPress={this.logOut}
        />
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
export default HikeSettings;