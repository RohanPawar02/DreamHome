import * as Actions from './action';
import initialState from '../store/initialState';

export const SavedReducer = (state = initialState.saved, action) => {
    switch (action.type) {
        case Actions.ADD_Saved:
            return {
                ...state,
                list: action.list
            };
        case Actions.FETCH_SAVED:
            return {
                ...state,
                list: action.list
            };
        case Actions.DELETE_SAVED:
            return {
                ...state,
                list: action.list
            };
        default:
            return state;
    }
};
