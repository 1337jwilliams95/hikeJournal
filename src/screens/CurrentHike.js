import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class CurrentHike extends Component {
  static navigationOptions = {
    title: "Hike Properties"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>CurrentHike</Text>
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
export default CurrentHike;
