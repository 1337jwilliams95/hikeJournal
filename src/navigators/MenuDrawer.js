import { createDrawerNavigator } from "react-navigation";

import HikeSettings from "../screens/HikeSettings";
import HikeNavigator from "./HikeNavigator";
import HikeCreateScreen from "../screens/HikeCreateScreen";
import { lightGreen } from "../common/common_colors";
import { getScreenWidth } from "../common/common_functions";
import ConfigureEventsScreen from "../screens/ConfigureEventsScreen";

const MenuDrawer = createDrawerNavigator(
  {
    currentHike: {
      screen: HikeNavigator,
      navigationOptions: {
        drawerLabel: "Current Hike"
      }
    },
    createHike: {
      screen: HikeCreateScreen,
      navigationOptions: {
        drawerLabel: "Create Hike"
      }
    },
    configureEvents: {
      screen: ConfigureEventsScreen,
      navigationOptions: {
        drawerLabel: "Configure Events"
      }
    },
    settings: {
      screen: HikeSettings,
      navigationOptions: {
        drawerLabel: "Settings"
      }
    }
  },
  {
    drawerBackgroundColor: lightGreen,
    drawerWidth: () => getScreenWidth() * 0.45
  }
);

export default MenuDrawer;
