import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
    errors: errorsReducer,
    loading: loadingReducer
});