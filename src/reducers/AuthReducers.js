import { LOGIN_SUCCESS, LOGOUT, AUTHENTICATED_KEY } from "../actions/types";
import { AsyncStorage } from 'react-native';

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      AsyncStorage.setItem(AUTHENTICATED_KEY, "true");
      return { token: action.payload };
    case LOGOUT: 
      AsyncStorage.setItem(AUTHENTICATED_KEY, "");
      return { token: null };
    default:
      return state;
  }
}
