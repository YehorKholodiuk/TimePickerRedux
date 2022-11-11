const initialState = {
    responseStatus: null
};

const reducers = (state = initialState, action) => {
    console.log(state, action);

    switch (action.type) {
        case 'SLOT_SUCCESS':
            return { ...state, responseStatus: 'SUCCESS' };

        case 'SLOT_ERROR':
            return { ...state, responseStatus: 'ERROR' };

        default:
            return state;
    }

};

export default reducers;
