import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from '../reducers'
import { LOGIN_SUCCESS, LOGOUT } from '../actions/types';
import { navigate } from '../navigators/NavigatorService'


export const configureStore = () => {
  const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(thunk))
  )

  store.dispatch(dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        navigate('hike');
        user.getIdToken().then(data => 
          dispatch({type: LOGIN_SUCCESS, payload: data})
          )
      }else {
        navigate('auth');
        dispatch({type: LOGOUT})
      }
    })
  });
  return store; 

}



