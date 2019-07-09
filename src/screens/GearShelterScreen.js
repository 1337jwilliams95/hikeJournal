import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function GearShelterScreen() {
  return (
    <View style={styles.container}>
      <Text>GearShelterScreen</Text>
    </View>
  );
}

export default GearShelterScreen;
