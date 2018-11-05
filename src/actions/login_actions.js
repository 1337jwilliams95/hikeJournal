import { Facebook, Google } from 'expo';
import firebase from 'firebase';
import {
  FACEBOOK_APP_ID,
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
  GOOGLE_WEB_CLIENT_ID
} from '../components/constants';
import {
  LOGIN_CANCELED,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_VALIDATION_ERROR,
  SIGN_IN_UPDATE
} from './types';

import { verifyEmail, verifyPassword } from './email_verifications';

export const doFacebookLogin = () => async dispatch => {
  const {
    type,
    token
  } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
    permission: ['email']
  });
  loginToFirebase(
    firebase.auth.FacebookAuthProvider.credential(token),
    token,
    type,
    dispatch
  );
};

export const doGoogleLogin = () => async dispatch => {
  const { type, idToken, accessToken } = await Google.logInAsync({
    androidClientId: GOOGLE_ANDROID_CLIENT_ID,
    iosClientId: GOOGLE_IOS_CLIENT_ID,
    webClientId: GOOGLE_WEB_CLIENT_ID,
    scopes: ['profile', 'email']
  });

  loginToFirebase(
    firebase.auth.GoogleAuthProvider.credential(idToken, accessToken),
    idToken,
    type,
    dispatch
  );
};

const loginToFirebase = (credential, token, type, dispatch) => {
  if (type === 'cancel') {
    return dispatch({ type: LOGIN_CANCELED });
  }
  console.debug(`credential: ${JSON.stringify(credential)} \n token: ${token}`);
  firebase
    .auth()
    .signInAndRetrieveDataWithCredential(credential)
    .catch(error => {
      console.debug(`firebase credential login error: ${error}`);
      return dispatch({ type: LOGIN_CANCELED });
    })
    .then(() => dispatch({ type: LOGIN_SUCCESS, payload: token }));
};

export const doEmailLogin = (email, password) => async dispatch => {
  const passwordError = verifyPassword(password);
  const emailError = verifyEmail(email.trim());
  const validationError = emailError || passwordError;

  if (validationError) {
    return dispatch({
      type: LOGIN_VALIDATION_ERROR,
      payload: validationError
    });
  }

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => dispatch({ type: LOGIN_SUCCESS, payload: { email, password } }))
    .catch(() => {
      dispatch({
        type: LOGIN_ERROR,
        payload: 'Error signing in. Invalid username or password.'
      });
    });
};

export const signInTextUpdate = ({ prop, value }) => ({
    type: SIGN_IN_UPDATE,
    payload: { prop, value }
  });
