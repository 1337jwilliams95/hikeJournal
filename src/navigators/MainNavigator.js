import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createSwitchNavigator } from "react-navigation";
import AuthNavigator from "./AuthNavigator";
import HikeNavigator from "./HikeNavigator";
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const MainNavigator = createSwitchNavigator({
  authLoading: {
    screen: AuthLoadingScreen
  },
  auth: {
    screen: AuthNavigator
  },
  hike: {
    screen: HikeNavigator
  }
}, {
  initialRouteName: 'authLoading'
});

export default MainNavigator;
