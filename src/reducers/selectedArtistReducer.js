import { SELECT_ARTIST } from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case SELECT_ARTIST:
            return action.payload;
        default:
            return state;
    }
};