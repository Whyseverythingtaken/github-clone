/**
 * authentication selectors
 */
import { createSelector } from 'reselect';

const selectAuthentication = state => state.authentication;

const selectToken = createSelector(
  selectAuthentication,
  selectAuthentication => selectAuthentication && selectAuthentication.token
);

export {
  selectAuthentication,
  selectToken
};
