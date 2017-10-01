import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import postsReducer from './postsReducer';
import loggedInReducer from './loggedInReducer';

export default combineReducers({
    posts: postsReducer,
    form: formReducer,
    auth: loggedInReducer
})
