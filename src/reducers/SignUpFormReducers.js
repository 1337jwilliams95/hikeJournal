import {
  SIGN_UP_UPDATE,
  SIGN_UP_VALIDATION_ERROR,
  LOGIN_SUCCESS,
  SIGN_UP_ERROR
} from "../actions/types";
const INITIAL_STATE = {
  email: "",
  password: "",
  confirmPassword: "",
  errorMessage: ""
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_UP_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        error: false
      };
    case SIGN_UP_VALIDATION_ERROR:
      return { ...state, password: "", confirmPassword: "", error: action.payload };
    case SIGN_UP_ERROR:
      return {...INITIAL_STATE, error: action.payload}
    case LOGIN_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}
