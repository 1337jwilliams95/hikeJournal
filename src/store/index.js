import { applyMiddleware, compose, createStore } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import { LOGIN_SUCCESS, LOGOUT } from '../actions/types';
import { navigate } from '../navigators/NavigatorService';
import reducers from '../reducers';


export default () => {
  const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(thunk)),
  );

  store.dispatch((dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigate('hike');
        user.getIdToken().then(data => dispatch({ type: LOGIN_SUCCESS, payload: data }));
      } else {
        navigate('auth');
        dispatch({ type: LOGOUT });
      }
    });
  });
  return store;
};
