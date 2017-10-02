import {types} from '../actions/types';
const initialState = {
    loggedIn: false,
    newUser: false,
    currentUser: false,
    signUp: false,
    userId: null,
    name: null,
    userAlert: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGGED_IN:
            console.log(action.payload)
            if(action.payload === "an error occurred"){
                return Object.assign({}, state, {userAlert: true});
            } else {
                return Object.assign({}, state, {loggedIn: true, currentUser: true, userId: action.payload._id, name: action.payload.name});
            }
        case types.LOGGED_OUT:
            return Object.assign({}, state, {loggedIn: false, newUser: false, currentUser: false, userId: null, name:null, userAlert: false});
        case types.ADD_USER:
            return Object.assign({}, state, {newUser: true, signUp: true, userAlert: false});
        default:
            return state;
    }
}
