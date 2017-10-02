import {types} from '../actions/types';
import initialState from './initialLogInState';

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGGED_IN:
            if(action.payload === "an error occurred"){
                return Object.assign({}, state, {userAlert: true});
            } else {
                return Object.assign({}, state, {loggedIn: true, currentUser: true, userId: action.payload._id, name: action.payload.name});
            }
        case types.REMOVE_WELCOME:
            return Object.assign({}, state, {removeWelcome: action.payload});
        case types.CHANGE_USER_ALERT:
            return Object.assign({}, state, {userAlert: action.payload});
        case types.LOGGED_OUT:
            return Object.assign({}, state, {loggedIn: false, newUser: false, currentUser: false, userId: null, name:null, userAlert: false});
        case types.ADD_USER:
            return Object.assign({}, state, {newUser: true, signUp: true, userAlert: false});
        case types.PLEASE_LOGIN:
            return Object.assign({}, state, {pleaseLogin: action.payload});
        default:
            return state;
    }
}
