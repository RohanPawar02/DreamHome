import { createSelector } from 'reselect';
const savedSelector = state => state.saved;
export const getSaved = createSelector([savedSelector], state => state.list);
