import React from "react";
import { Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import CurrentHike from "../screens/CurrentHike";
import GearNavigator from "./GearNavigator";
import MapScreen from "../screens/MapScreen";

const HikeNavigator = createBottomTabNavigator(
  {
    currentHike: {
      screen: CurrentHike
    },
    gear: {
      screen: GearNavigator,
      navigationOptions: {
        title: "Gear"
      }
    },
    map: {
      screen: MapScreen
    }
  },
  {
    navigationOptions: {
      drawerLabel: () => <Text>Current Hike</Text>
    }
  }
);

const styles = StyleSheet.create({});
export default HikeNavigator;
