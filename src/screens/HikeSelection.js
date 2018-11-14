import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { blue } from "../common/common_colors";
import { Button } from "react-native-elements";
import { getScreenWidth } from "../common/common_functions";
import { connect } from "react-redux";
import { fetchCurrentHike } from "../actions";

class HikeSelection extends Component {
  getNewOrContinueButton() {
    if (this.props.currentHike) {
      return (
        <Button
          buttonStyle={styles.button}
          textStyle={{ color: "black" }}
          title="Continue"
          raised
        />
      );
    }
    return (
      <Button
        buttonStyle={[styles.button, { backgroundColor: "#fff" }]}
        textStyle={{ color: "black" }}
        title="New"
        raised
      />
    );
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: blue }]}>
        {this.getNewOrContinueButton}
        <Button
          buttonStyle={styles.button}
          title="Load"
          raised
          textStyle={{ color: "black" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: 10,
    backgroundColor: "#fff",
    width: getScreenWidth() * 0.5,
    height: 40
  }
});

mapStateToProps = state => {
  const { userId } = state.auth;
  const { currentHike } = state.hikeSelection;
  return { userId, currentHike };
};
export default connect(mapStateToProps, { fetchCurrentHike })(HikeSelection);
