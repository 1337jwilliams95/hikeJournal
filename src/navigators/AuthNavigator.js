import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import AuthScreen from '../screens/AuthScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthNavigator = createBottomTabNavigator({
  login: {
    screen: AuthScreen,
    navigationOptions: {
      title: 'Log In'
    }
  },
  signUp: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Sign Up'
    }
  }
}, {
  navigationOptions: {
    gestureEnabled: true
  }
});
  
const styles = StyleSheet.create({});
export default AuthNavigator;
