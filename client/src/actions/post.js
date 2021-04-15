import axios from 'axios';
import { setAlert } from './alert';
import { ADD_COMMENT, REMOVE_COMMENT, GET_POST, GET_POSTS, ADD_POST, POST_ERROR, UPDATE_LIKES, DELETE_POST } from './types';

//Get Posts
export const getPosts = () => async dispatch => {
    try {

        const res = await axios.get('/api/posts');

        console.log(res)
        dispatch({ type: GET_POSTS, payload: res.data });
    } catch (err) {
        console.log(err)
        if(err.response)
        { dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });}
        else { dispatch({ type:POST_ERROR})}
    }


};

//Add like
export const addLike = id => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like/${id}`);

        dispatch({ type: UPDATE_LIKES, payload: { id, likes: res.data } });
    } catch (err) {
        if(err.response)
       { dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });}
        else { dispatch({ type:POST_ERROR})}
    }


};


//Remove like
export const removeLike = id => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/unlike/${id}`);

        dispatch({ type: UPDATE_LIKES, payload: { id, likes: res.data } });
    } catch (err) {
        if(err.response)
       { dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });}
        else { dispatch({ type:POST_ERROR})}
    }


};

//Delete post
export const deletePost = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/posts/${id}`);

        dispatch({ type: DELETE_POST, payload: id });

        dispatch(setAlert('Post Removed', 'success'));

    } catch (err) {
        if(err.response)
       { dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });}
        else { dispatch({ type:POST_ERROR})}
    }


};


//add post
export const addPost = formData => async dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }

    try {
        const res = await axios.post(`/api/posts`, formData, config);

        dispatch({ type: ADD_POST, payload: res.data });

        dispatch(setAlert('Post created', 'success'));

    } catch (err) {
        if(err.response)
       { dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });}
        else { dispatch({ type:POST_ERROR})}
    }


};


//Get Post
export const getPost = id => async dispatch => {
    try {
        const res = await axios.get(`/api/posts/${id}`);

        dispatch({ type: GET_POST, payload: res.data });
    } catch (err) {
        if(err.response)
       { dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });}
        else { dispatch({ type:POST_ERROR})}
    }


};

//add comment
export const addComment = (postId, formData) => async dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }

    try {
        const res = await axios.post(`/api/posts/comment/${postId}`, formData, config);

        dispatch({ type: ADD_COMMENT, payload: res.data });

        dispatch(setAlert('comment added', 'success'));

    } catch (err) {
        if(err.response)
        { dispatch({
             type: POST_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
         });}
         else { dispatch({ type:POST_ERROR})}
    }


};

//delete comment
export const deleteComment = (postId, commentId) => async dispatch => {


    try {
        const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

        dispatch({ type: REMOVE_COMMENT, payload: commentId });

        dispatch(setAlert('comment removed', 'success'));

    } catch (err) {
        if(err.response)
        { dispatch({
             type: POST_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
         });}
         else { dispatch({ type:POST_ERROR})}
    }


};