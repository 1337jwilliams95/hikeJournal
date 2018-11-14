import { HIKE_FETCH_SUCCESS, PAST_HIKE_FETCH_SUCCCESS } from "../actions/types";

const INITIAL_STATE = {};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HIKE_FETCH_SUCCESS:
      return { ...state, currentHike: action.payload };
    case PAST_HIKE_FETCH_SUCCCESS:
      return { ...state, pastHikes: action.payload };
    default:
      return state;
  }
}
