import {
  LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_VALIDATION_ERROR, SIGN_IN_UPDATE,
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', error: '' };
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        error: '',
      };
    case LOGIN_VALIDATION_ERROR:
      return { ...state, password: '', error: action.payload };
    case LOGIN_ERROR:
      return { ...INITIAL_STATE, error: action.payload };
    case LOGIN_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}
