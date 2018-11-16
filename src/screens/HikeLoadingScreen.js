import React from "react";
import { CURRENT_HIKE_KEY } from "../actions/types";
import { firebase } from "firebase";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

class HikeLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    this.props.navigation.navigate("mainApp");
    // const { userId } = await firebase.auth();
    // if (userId) {
    //   const currentHike = await firebase
    //     .database()
    //     .ref(`users/${userId}/pastHikes`)
    //     .on("value", snapshot => {
    //       dispatch({ type: HIKE_FETCH_SUCCESS, payload: snapshot.val() });
    //     });
    //   this.props.navigation.navigate(currentHike ? "mainApp" : "hikeSelection");
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
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

export default HikeLoadingScreen;
