import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';

const logOut = () => firebase.auth().signOut();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function HikeSettings() {
  return (
    <View style={styles.container}>
      <Button
        title="Log out"
        onPress={logOut}
      />
    </View>
  );
}

export default HikeSettings;
