import _ from 'lodash';
import {types} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_POSTS:
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
}
