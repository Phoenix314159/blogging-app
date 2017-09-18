import { combineReducers } from 'redux';
import bloggingReducer from './bloggingReducer';
export default combineReducers({
blog: bloggingReducer
})
