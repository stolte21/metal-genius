import { Map } from 'immutable';
import { FETCH_ARTIST_ANALYSIS } from '../actions/types';
import { createSuccessAction } from '../utils/actionUtil';

export default (state = Map(), action) => {
    switch (action.type) {
        case createSuccessAction(FETCH_ARTIST_ANALYSIS):
            return state.set(action.payload.id, action.payload);
        default:
            return state;
    }
};