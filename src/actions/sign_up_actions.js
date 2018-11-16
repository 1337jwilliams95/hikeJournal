import firebase from 'firebase';

import {
  LOGIN_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_UPDATE,
  SIGN_UP_VALIDATION_ERROR
} from './types';

import {
  verifyEmail,
  verifyPassword,
  verifyPasswordsSame
} from './email_verifications';

export const signUpTextUpdate = ({ prop, value }) => ({
    type: SIGN_UP_UPDATE,
    payload: { prop, value }
  });

export const emailSignUp = ({
  email,
  password,
  confirmPassword
}) => dispatch => {
  const passwordSameError = verifyPasswordsSame(password, confirmPassword);
  const passwordError = verifyPassword(password);
  const emailError = verifyEmail(email.trim());

  const validationError = emailError || passwordError || passwordSameError;

  if (validationError) {
    return dispatch({
      type: SIGN_UP_VALIDATION_ERROR,
      payload: validationError
    });
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.trim(), password)
    .then(dispatch({ type: LOGIN_SUCCESS, payload: { email, password } }))
    .catch(error => {
      console.log(error);
      dispatch({
        type: SIGN_UP_ERROR,
        payload: 'Error signing up! Email may already be in use.'
      });
    });
};
