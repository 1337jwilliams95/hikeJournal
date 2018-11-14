import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class MapScreen extends Component {
  static navigationOptions = {
    title: "Journal"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>MapScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default MapScreen;
