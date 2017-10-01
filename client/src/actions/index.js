import {types} from './types';
import axios from 'axios';

export const fetchPosts = (url, userid) => async dispatch => {
    const request = await axios.get(`${url}?userid=${userid}`);
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

export const login = (user, callback) => async dispatch => {
    const request = await axios.post(`/api/login`, user);
    console.log(request)
    callback();
    return dispatch({
        type: types.LOGGED_IN,
        payload: request.data
    })
}

export const logout = () => async dispatch => {
    const request = await axios.get(`/api/logout`);
    return dispatch({
        type: types.LOGGED_OUT,
        payload: request
    })
}

export const addUser = (user, callback) => async dispatch => {
    await axios.post('/api/adduser', user);
    callback();
    return dispatch({
        type: types.ADD_USER
    })
}

