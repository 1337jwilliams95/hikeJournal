import { createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AuthNavigator from './AuthNavigator';
import HikeNavigator from './HikeNavigator';

const MainNavigator = createSwitchNavigator({
  authLoading: {
    screen: AuthLoadingScreen,
  },
  auth: {
    screen: AuthNavigator,
  },
  hike: {
    screen: HikeNavigator,
  },
}, {
  initialRouteName: 'authLoading',
});

export default MainNavigator;
