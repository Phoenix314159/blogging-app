import _ from 'lodash';
import {types} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_POST:
            // const post = action.payload.data;
            // const newState =  { ...state  }
            // newState[post.id] = post;
            // return newState;
            return {...state, [action.payload.data.id]: action.payload.data};
        case types.FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
