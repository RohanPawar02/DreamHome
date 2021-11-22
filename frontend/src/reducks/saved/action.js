export const ADD_Saved = 'ADD_SAVED';
export const addSavedAction = saved => {
    return {
        type: 'ADD_SAVED',
        list: saved
    };
};

export const FETCH_SAVED = 'FETCH_SAVED';
export const fetchSavedAction = saved => {
    return {
        type: 'FETCH_SAVED',
        list: saved
    };
};

export const DELETE_SAVED = 'DELETE_SAVED';
export const deleteSavedAction = saved => {
    return {
        type: 'DELETE_SAVED',
        list: saved
    };
};
