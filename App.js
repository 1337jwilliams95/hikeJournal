import React from 'react';
import { Provider } from 'react-redux';
import  firebase  from 'firebase';
import {configureStore} from './src/store/index';
import MainNavigator from './src/navigators/MainNavigator';
import { setNavigator } from './src/navigators/NavigatorService';

export default class App extends React.Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyCdxnu3Xome4a7k1vFJ3ehbroOxHQ-OXaI",
      authDomain: "hikejournal-4b046.firebaseapp.com",
      databaseURL: "https://hikejournal-4b046.firebaseio.com",
      projectId: "hikejournal-4b046",
      storageBucket: "hikejournal-4b046.appspot.com",
      messagingSenderId: "179597601255"
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
        <MainNavigator ref={nav => { this.navigator = nav; }}/>
      </Provider>
    );
  }
}
