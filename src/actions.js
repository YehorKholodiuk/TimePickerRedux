import axios from 'axios';

export function checkSlot(slot) {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/',
            data: {
                slot
            }
        }).then(({ data }) => {
            dispatch({ type: 'SLOT_SUCCESS' });
        })
            .catch(() => {
                dispatch({ type: 'SLOT_ERROR' });
            });
    };
}
