import { FACEBOOK_APP_ID, GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from "../components/constants";
import { LOGIN_SUCCESS, LOGIN_CANCELED, USER_TOKEN } from "./types";
import { AsyncStorage } from "react-native";
import { Facebook } from "expo";

export const doLogin = loginSystem => async dispatch => {
  let token = await AsyncStorage.getItem(USER_TOKEN);
  if (token) {
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  } else {
    switch (loginSystem) {
      case "facebook":
        doFacebookLogin(dispatch);
      case "google":
        doGoogleLogin(dispatch);
      default:
        return;
    }
  }
};

const doFacebookLogin = async dispatch => {
  let {
    type,
    token
  } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
    permission: ["public_profile"]
    // behavior: 'native'
  });

  if (type === "cancel") {
    return dispatch({ type: LOGIN_CANCELED });
  }
  await AsyncStorage.setItem(USER_TOKEN, token);
  return dispatch({ type: LOGIN_SUCCESS, payload: token });
};


const doGoogleLogin = async dispatch => {
  let {
    type,
    accessToken
  } = await Expo.Google.logInAsync({
              androidClientId: GOOGLE_ANDROID_CLIENT_ID,
              iosClientId: GOOGLE_IOS_CLIENT_ID,
              scopes: ['profile', 'email'],
            });

  if (type === "cancel") {
    return dispatch({ type: LOGIN_CANCELED });
  }
  await AsyncStorage.setItem(USER_TOKEN, accessToken);
  return dispatch({ type: LOGIN_SUCCESS, payload: accessToken });
};


