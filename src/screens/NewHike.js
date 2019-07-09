import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function NewHike() {
  return (
    <View style={styles.container}>
      <Text>NewHike</Text>
    </View>
  );
}

export default NewHike;
