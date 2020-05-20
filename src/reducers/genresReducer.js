import { Set as ImmutableSet } from 'immutable';
import { FETCH_SAMPLE_ARTISTS } from '../actions/types';
import { createSuccessAction } from '../utils/actionUtil';

export default (state = ImmutableSet(), action) => {
    switch (action.type) {
        case createSuccessAction(FETCH_SAMPLE_ARTISTS):
            const genres = new Set();
            action.payload.forEach(({ genre }) => genres.add(genre));

            return ImmutableSet(genres);
        default:
            return state;
    }
};