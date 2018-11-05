import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import GearClothesScreen from '../screens/GearClothesScreen';
import GearMiscScreen from '../screens/GearMiscScreen';
import GearShelterScreen from '../screens/GearShelterScreen';

const GearNavigator = createBottomTabNavigator({
  clothes: {
    screen: GearClothesScreen
  },
  shelter: {
    screen: GearShelterScreen
  },
  miscGear: {
    screen: GearMiscScreen
  }
});

const styles = StyleSheet.create({});
export default GearNavigator;
