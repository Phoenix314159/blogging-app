import { types } from './types';
import axios from 'axios';

export const dummyActionCreator1 = url => async dispatch => {

    const res = await axios.get(url);

    dispatch({
        type: types.FETCH_SOMETHING1,
        payload: res.data
    })
}

export const dummyActionCreator2 = (string) => dispatch => {

    dispatch({
        type: types.FETCH_SOMETHING2,
        payload: string
    })
}