import { combineReducers } from 'redux';
import facebookLogin from './AuthReducers';
import signInForm from './SignInFormReducers';
import signUpForm from './SignUpFormReducers';

export default combineReducers({
  facebookLogin,
  signInForm,
  signUpForm,
});
