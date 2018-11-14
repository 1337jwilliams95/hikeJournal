import { combineReducers } from "redux";
import auth from "./AuthReducers";
import signInForm from "./SignInFormReducers";
import signUpForm from "./SignUpFormReducers";
import hikeSelection from "./HikeSelectionReducer";

export default combineReducers({
  auth,
  signInForm,
  signUpForm,
  hikeSelection
});
