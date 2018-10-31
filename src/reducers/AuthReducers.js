import { AsyncStorage } from 'react-native';
import { AUTHENTICATED_KEY, LOGIN_SUCCESS, LOGOUT } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      AsyncStorage.setItem(AUTHENTICATED_KEY, 'true');
      return { token: action.payload };
    case LOGOUT: 
      AsyncStorage.setItem(AUTHENTICATED_KEY, '');
      return { token: null };
    default:
      return state;
  }
}
