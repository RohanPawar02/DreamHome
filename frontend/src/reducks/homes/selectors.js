import { createSelector } from 'reselect';

const homesSelector = state => state.homes;

export const getHomes = createSelector([homesSelector], state => state.list);

export const getHasNext = createSelector([homesSelector], state => state.hasNext);
