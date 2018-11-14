import { firebase } from "firebase";
import { HIKE_FETCH_SUCCESS } from "./types";

export const fetchAllHikes = userID => dispatch => {
  if (userID) {
    firebase
      .database()
      .ref(`users/${userID}/pastHikes`)
      .on("value", snapshot => {
        dispatch({ type: HIKE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  }
};

export const fetchCurrentHike = userID => dispatch => {
  if (userID) {
    firebase
      .database()
      .ref(`users/${userID}/currentHike`)
      .on("value", snapshot => {
        dispatch({ type: HIKE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  }
};
