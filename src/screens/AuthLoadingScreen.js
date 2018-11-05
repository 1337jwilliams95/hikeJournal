import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { AUTHENTICATED_KEY } from '../actions/types';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  
  _bootstrapAsync = async () => {
    const authenticated = await AsyncStorage.getItem(AUTHENTICATED_KEY);
    this.props.navigation.navigate(authenticated ? 'hike' : 'auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AuthLoadingScreen;
