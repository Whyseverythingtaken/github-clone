/*
 * authentication reducer
 */
import { AUTHENTICATION_SUCCESS } from './constants';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
