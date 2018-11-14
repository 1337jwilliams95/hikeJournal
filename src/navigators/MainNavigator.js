import { createSwitchNavigator } from "react-navigation";
import AuthNavigator from "./AuthNavigator";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import DrawerWrapper from "./DrawerWrapper";
import HikeLoadingScreen from "../screens/HikeLoadingScreen";
import HikeSelection from "../screens/HikeSelection";

const MainNavigator = createSwitchNavigator(
  {
    authLoading: {
      screen: AuthLoadingScreen
    },
    auth: {
      screen: AuthNavigator
    },
    hikeSelection: {
      screen: HikeSelection
    },
    hikeLoading: {
      screen: HikeLoadingScreen
    },
    mainApp: {
      screen: DrawerWrapper
    }
  },
  {
    initialRouteName: "authLoading",
    navigationOptions: {
      title: "Hike Journal"
    }
  }
);

export default MainNavigator;
