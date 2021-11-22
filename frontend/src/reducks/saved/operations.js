import API from '../../API';
import { addSavedAction, fetchSavedAction, deleteSavedAction } from './action';

const api = new API();
const SAVED_KEY = 'SAVED_KEY';

export const fetchFromLocalStorage = () => {
    return async dispatch => {
        let savedJSON = localStorage.getItem(SAVED_KEY);
        let saved = [];
        if (savedJSON) {
            saved = JSON.parse(savedJSON);
        }
        dispatch(fetchSavedAction(saved));
    };
};

export const addSaved = home => {
    return async (dispatch, getState) => {
        let prevSaved = getState().saved.list;
        const nextSaved = [home, ...prevSaved];
        setToLocalStorage(nextSaved);
        dispatch(addSavedAction(nextSaved));
    };
};

export const deleteSaved = id => {
    return async (dispatch, getState) => {
        let prevSaved = getState().saved.list;
        const nextSaved = prevSaved.filter(main_image => main_image.id !== id);
        setToLocalStorage(nextSaved);
        dispatch(deleteSavedAction(nextSaved));
    };
};

const setToLocalStorage = saved => {
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
};
