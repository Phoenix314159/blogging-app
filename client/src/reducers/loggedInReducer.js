import {types} from '../actions/types';

export default (state = {}, action) => {
    const {type, payload} = action
    switch (type) {
        case types.LOGGED_IN:
            if(payload === "an error occurred"){
                return {...state, userAlert: true};
            } else {
                const {payload: {_id, name}} = action
                return {...state, loggedIn: true, currentUser: true, userId: _id, name};
            }
        case types.REMOVE_WELCOME:
            return {...state, removeWelcome: payload};
        case types.CHANGE_USER_ALERT:
            return {...state, userAlert: payload};
        case types.LOGGED_OUT:
            return {...state, loggedIn: false, newUser: false, currentUser: false, userId: null, name:null, userAlert: false};
        case types.ADD_USER:
            return {...state, newUser: true, signUp: true, userAlert: false};
        case types.PLEASE_LOGIN:
            return {...state, pleaseLogin: payload};
        default:
            return state;
    }
}
