import { createBottomTabNavigator } from 'react-navigation';
import GearClothesScreen from '../screens/GearClothesScreen';
import GearMiscScreen from '../screens/GearMiscScreen';
import GearShelterScreen from '../screens/GearShelterScreen';

const GearNavigator = createBottomTabNavigator({
  clothes: {
    screen: GearClothesScreen,
  },
  shelter: {
    screen: GearShelterScreen,
  },
  miscGear: {
    screen: GearMiscScreen,
  },
});

export default GearNavigator;
