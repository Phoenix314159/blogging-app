import {types} from '../actions/types';
const initialState = {
    loggedIn: false,
    newUser: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGGED_IN:
            return Object.assign({}, state, {loggedIn: true});
        case types.LOGGED_OUT:
            return Object.assign({}, state, {loggedIn: false, newUser: false});
        case types.ADD_USER:
            return Object.assign({}, state, {newUser: true});
        default:
            return state;
    }
}
