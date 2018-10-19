import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';


class HikeSettings extends Component {
  logOut = () => {
    firebase.auth().signOut();
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