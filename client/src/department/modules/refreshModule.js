import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

const initState = {
    update: false
}

const UPDATE = 'refresher/UPDATE';

export const update = createAction(UPDATE);

const refresher = handleActions({
    [UPDATE]: (state, action) => 
        produce(state, draft => {
            draft.update = true;
        }),
}, initState);

export default refresher;