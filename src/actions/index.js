/**
 * Created by jyothi on 22/8/17.
 */

import {
    RESET_ALL
} from '../constants/actionTypes';

export function resetAll() {
    return (dispatch, getState) => {
        return dispatch({
            type: RESET_ALL,
            payload: null,
            meta: {
                //Any information for promise
            },
            callbacks: {
                //Check middleware for callbacks
            }
        });
    };
}