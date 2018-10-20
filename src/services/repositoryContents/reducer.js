/*
 * repositoryContents reducer
 */
import { REPOSITORY_CONTENTS_LOADED } from './constants';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case REPOSITORY_CONTENTS_LOADED:
      // make the directories go on top, files at the bottom
      const sorted = action.payload.sort((a, b) => {
        if (a.type > b.type) return 1
        if (a.type < b.type) return -1
        return 0;
      });
      return sorted;
    default:
      return state;
  }
}
