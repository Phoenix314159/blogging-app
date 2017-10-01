import {types} from '../actions/types';
const initialState = {
    loggedIn: false,
    newUser: false,
    currentUser: false,
    signUp: false,
    userId: null,
    name: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGGED_IN:
            if(action.payload === "error"){
                alert("You Must Create an Account First")
                return state;
            } else {
                return Object.assign({}, state, {loggedIn: true, currentUser: true, userId: action.payload._id, name: action.payload.name});
            }
        case types.LOGGED_OUT:
            return Object.assign({}, state, {loggedIn: false, newUser: false, currentUser: false, userId: null, name:null});
        case types.ADD_USER:
            return Object.assign({}, state, {newUser: true, signUp: true});
        default:
            return state;
    }
}
