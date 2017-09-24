import {types} from './types';
import axios from 'axios';

export const fetchPosts = () => {
    const request = axios.get(`/api/getposts`);
    return {
        type: types.FETCH_POSTS,
        payload: request
    }
}

export const createPost = (values, callback) => {
    const request = axios.post(`/api/addpost`, values).then(() => callback());
    return {
        type: types.CREATE_POST,
        payload: request
    }
}

export const fetchPost = id => {
    const request = axios.get(`/api/getpost?id=${id}`);
    return {
        type: types.FETCH_POST,
        payload: request
    }
}

