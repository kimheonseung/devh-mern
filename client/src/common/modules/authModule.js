import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

const initState = {
    timerId: ''
}

const TIMER = 'auth/TIMER';

export const timer = createAction(TIMER, timerId => timerId);

const auth = handleActions({
    [TIMER]: (state, {payload: timerId}) => 
        produce(state, draft => {
            draft.timerId = timerId;
        }),
}, initState);

export default auth;