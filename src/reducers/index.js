import { combineReducers } from 'redux';
import facebookLogin from '../reducers/AuthReducers';
import signInForm from '../reducers/SignInFormReducers';
import signUpForm from '../reducers/SignUpFormReducers';

export default combineReducers({
  facebookLogin,
  signInForm,
  signUpForm
});
