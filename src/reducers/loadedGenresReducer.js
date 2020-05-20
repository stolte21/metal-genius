import { Set } from 'immutable';
import { LOAD_GENRE } from '../actions/types';

export default (state = Set(), action) => {
    switch (action.type) {
        case LOAD_GENRE:
            return state.add(action.payload);
        default:
            return state;
    }
};