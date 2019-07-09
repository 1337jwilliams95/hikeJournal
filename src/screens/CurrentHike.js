import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function CurrentHike() {
  return (
    <View style={styles.container}>
      <Text>CurrentHike</Text>
    </View>
  );
}

export default CurrentHike;
