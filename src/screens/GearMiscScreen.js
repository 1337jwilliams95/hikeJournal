import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function GearMiscScreen() {
  return (
    <View style={styles.container}>
      <Text>GearMiscScreen</Text>
    </View>
  );
}

export default GearMiscScreen;
