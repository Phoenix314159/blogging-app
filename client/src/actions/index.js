import { types } from './types';
import axios from 'axios';

export const fetchPosts =  () =>  {
    const request = axios.get(`/api/getposts`)
    return {
        type: types.FETCH_POSTS,
        payload: request
    }
}

