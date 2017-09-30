import {types} from './types';
import axios from 'axios';

export const fetchPosts = url => async dispatch => {
    const request = await axios.get(url);
    return dispatch({
        type: types.FETCH_POSTS,
        payload: request
    })
}

export const createPost = (values, callback) => async dispatch => {
    const request = await axios.post(`/api/addpost`, values);
    callback();
    return dispatch({
        type: types.CREATE_POST,
        payload: request
    })
}

export const fetchPost = id => async dispatch => {
    const request = await axios.get(`/api/getpost?id=${id}`);
    return dispatch({
        type: types.FETCH_POST,
        payload: request
    })
}

export const deletePost = (id, callback) => async dispatch => {
    const request = await axios.delete(`/api/deletepost?id=${id}`);
    callback();
    return dispatch({
        type: types.DELETE_POST,
        payload: id
    })
}

export const login = user => async dispatch => {
    const request = await axios.post(`/api/login`, user);
    return dispatch({
        type: types.LOGIN,
        payload: user
    })
}

