import { createStackNavigator } from "react-navigation";
import MenuDrawer from "./MenuDrawer";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { blue } from "../common/common_colors";
const DrawerWrapper = createStackNavigator(
  {
    journal: {
      screen: MenuDrawer
    }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      title: "Hike Journal",
      headerBackground: blue,
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            style={styles.headerButton}
            source={require("../../assets/Hamburger_icon.png")}
          />
        </TouchableOpacity>
      )
    })
  }
);
const styles = StyleSheet.create({
  headerButton: {
    left: 10,
    width: 20,
    height: 20
  }
});
export default DrawerWrapper;
