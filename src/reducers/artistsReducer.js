import { Map } from 'immutable';
import { keyBy } from 'lodash';
import { FETCH_SAMPLE_ARTISTS } from '../actions/types';
import { createSuccessAction } from '../utils/actionUtil';

export default (state = Map(), action) => {
    switch (action.type) {
        case createSuccessAction(FETCH_SAMPLE_ARTISTS):
            return Map(keyBy(action.payload, 'id'));
        default:
            return state;
    }
};