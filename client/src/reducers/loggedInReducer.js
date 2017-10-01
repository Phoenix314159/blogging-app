import {types} from '../actions/types';
const initialState = {
    loggedIn: false,
    shouldRedirect: false,
    errorMessage: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGGED_IN:
            return Object.assign({}, state, {loggedIn: true, shouldRedirect: true});
        case types.LOGGED_OUT:
            console.log('yo man')
            return Object.assign({}, state, {loggedIn: false, shouldRedirect: false});
        default:
            return state;
    }
}
