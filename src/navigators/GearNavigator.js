import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import GearClothesScreen from '../screens/GearClothesScreen';
import GearShelterScreen from '../screens/GearShelterScreen';
import GearMiscScreen from '../screens/GearMiscScreen';

const GearNavigator = createBottomTabNavigator({
  clothes: {
    screen: GearClothesScreen
  }, shelter: {
    screen: GearShelterScreen
  }, miscGear: {
    screen: GearMiscScreen
  }
})

const styles = StyleSheet.create({});
export default GearNavigator;