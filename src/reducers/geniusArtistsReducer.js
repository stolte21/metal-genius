import { Map } from 'immutable';
import { keyBy } from 'lodash';
import { FETCH_GENIUS_ARTISTS } from '../actions/types';
import { createSuccessAction } from '../utils/actionUtil';

export default (state = Map(), action) => {
    switch (action.type) {
        case createSuccessAction(FETCH_GENIUS_ARTISTS):
            const newEntries = Map(keyBy(action.payload, 'id'));
            return state.merge(newEntries);
        default:
            return state;
    }
};