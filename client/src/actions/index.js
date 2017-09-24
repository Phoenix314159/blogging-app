import { types } from './types';
import axios from 'axios';

export const fetchPosts = () =>  {
    const request = axios.get(`/api/getposts`);
    console.log(request);
    return {
        type: types.FETCH_POSTS,
        payload: request
    }
}

export const createPost = values => {
    const request = axios.post(`/api/addpost`, values);
    return {
        type: types.CREATE_POST,
        payload: request
    }
}

