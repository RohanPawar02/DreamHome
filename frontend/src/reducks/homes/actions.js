export const FETCH_HOMES = 'FETCH_HOMES';
export const fetchHomesAction = (homes, hasNext) => {
    return {
        type: FETCH_HOMES,
        list: homes,
        hasNext: hasNext
    };
};
export const CLEAR_HOMES = 'CLEAR_HOMES';
export const clearHomesAction = () => {
    return {
        type: CLEAR_HOMES,
        list: [],
        hasNext: true
    };
};
