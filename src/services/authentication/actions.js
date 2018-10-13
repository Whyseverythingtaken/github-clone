/**
 * authentication actions
 */
import {
  AUTHENTICATE,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_ERROR
} from './constants';

export function authenticate(code) {
  return {
    type: AUTHENTICATE,
    code
  };
}

export function authenticationSuccess(response) {
  return {
    type: AUTHENTICATION_SUCCESS,
    payload: response
  };
}

export function authenticationError(error) {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error
  };
}
