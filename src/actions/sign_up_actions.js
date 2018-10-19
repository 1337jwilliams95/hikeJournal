import firebase from "firebase";

import {
  LOGIN_SUCCESS,
  SIGN_UP_VALIDATION_ERROR,
  SIGN_UP_UPDATE
} from "./types";

import {
  verifyEmail,
  verifyPasswordsSame,
  verifyPassword
} from "./email_verifications";

export const signUpTextUpdate = ({ prop, value }) => {
  return {
    type: SIGN_UP_UPDATE,
    payload: { prop, value }
  };
};

export const emailSignUp = ({
  email,
  password,
  confirmPassword
}) => dispatch => {
  const passwordSame = verifyPasswordsSame(password, confirmPassword);
  const passwordValid = verifyPassword(password);
  const emailValid = verifyEmail(email.trim());

  if (!emailValid) {
    return dispatch({
      type: SIGN_UP_VALIDATION_ERROR,
      payload: "Email seems invalid. Should include '@' and '.'"
    });
  }

  if (!passwordValid) {
    return dispatch({
      type: SIGN_UP_VALIDATION_ERROR,
      payload: "Passwords must be at least 8 characters!"
    });
  }

  if (!passwordSame) {
    return dispatch({
      type: SIGN_UP_VALIDATION_ERROR,
      payload: "Passwords do no match!"
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
        payload: "Error signing up! Email may already be in use."
      });
    });
};
