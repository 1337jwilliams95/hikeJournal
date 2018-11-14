import { createBottomTabNavigator } from "react-navigation";
import GearClothesScreen from "../screens/GearClothesScreen";
import GearShelterScreen from "../screens/GearShelterScreen";
import GearMiscScreen from "../screens/GearMiscScreen";

const GearNavigator = createBottomTabNavigator({
  clothes: {
    screen: GearClothesScreen,
    navigationOptions: {
      title: "Clothing"
    }
  },
  shelter: {
    screen: GearShelterScreen,
    navigationOptions: {
      title: "Shelter"
    }
  },
  miscGear: {
    screen: GearMiscScreen,
    navigationOptions: {
      title: "Misc."
    }
  }
});

export default GearNavigator;
