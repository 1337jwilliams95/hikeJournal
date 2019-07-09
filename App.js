import { Provider } from 'react-redux';
import React from 'react';
import firebase from 'firebase';
import { setNavigator } from './src/navigators/NavigatorService';
import MainNavigator from './src/navigators/MainNavigator';
import configureStore from './src/store/index';


export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCdxnu3Xome4a7k1vFJ3ehbroOxHQ-OXaI',
      authDomain: 'hikejournal-4b046.firebaseapp.com',
      databaseURL: 'https://hikejournal-4b046.firebaseio.com',
      projectId: 'hikejournal-4b046',
      storageBucket: 'hikejournal-4b046.appspot.com',
      messagingSenderId: '179597601255',
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    setNavigator(this.navigator);
  }

  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <MainNavigator ref={(nav) => { this.navigator = nav; }} />
      </Provider>
    );
  }
}
