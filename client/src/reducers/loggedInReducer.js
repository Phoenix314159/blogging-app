import {types} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.LOGGED_IN:
            if(action.payload === "an error occurred"){
                return {...state, userAlert: true};
            } else {
                return {...state, loggedIn: true, currentUser: true, userId: action.payload._id, name: action.payload.name};
            }
        case types.REMOVE_WELCOME:
            return {...state, removeWelcome: action.payload};
        case types.CHANGE_USER_ALERT:
            return {...state, userAlert: action.payload};
        case types.LOGGED_OUT:
            return {...state, loggedIn: false, newUser: false, currentUser: false, userId: null, name:null, userAlert: false};
        case types.ADD_USER:
            return {...state, newUser: true, signUp: true, userAlert: false};
        case types.PLEASE_LOGIN:
            return {...state, pleaseLogin: action.payload};
        default:
            return state;
    }
}
