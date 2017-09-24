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

export const deletePost = (id, callback) => {
    const request = axios.delete(`/api/deletepost?id=${id}`).then(() => callback());
    return {
        type: types.DELETE_POST,
        payload: id
    }
}

