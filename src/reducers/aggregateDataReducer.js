import { FETCH_AGGREGATE_DATA } from '../actions/types';
import { createSuccessAction } from '../utils/actionUtil';

export default (state = {}, action) => {
    switch (action.type) {
        case createSuccessAction(FETCH_AGGREGATE_DATA):
            return action.payload;
        default:
            return state;
    }
};