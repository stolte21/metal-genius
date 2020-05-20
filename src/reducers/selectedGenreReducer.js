import { FETCH_SAMPLE_ARTISTS, SELECT_GENRE } from '../actions/types';
import { createSuccessAction } from '../utils/actionUtil';

export default (state = '', action) => {
    switch (action.type) {

        case createSuccessAction(FETCH_SAMPLE_ARTISTS):
            const genres = new Set();
            action.payload.forEach(({ genre }) => genres.add(genre));

            for (const genre of genres.keys()) {
                return genre;
            }
            break;
        case SELECT_GENRE:
            return action.payload;
        default:
            return state;
    }
};