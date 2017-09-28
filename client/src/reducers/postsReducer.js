import _ from 'lodash';
import {types} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_POST:
            return {...state, [action.payload.data.id]: action.payload.data};
        case types.FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case types.DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
