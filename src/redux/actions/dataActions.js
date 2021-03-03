import { 
    SET_POSTS, 
    LOADING_DATA, 
    LOADING_UI,
    LIKE_POST, 
    UNLIKE_POST, 
    DELETE_POST, 
    CLEAR_ERRORS, 
    SET_ERRORS, 
    MAKE_POST, 
    SET_POST,
    STOP_LOADING_UI
} from '../types';
import axios from 'axios';


export const getPosts = () => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    axios.get('/posts')
        .then(result => {
            dispatch({
                type: SET_POSTS,
                payload: result.data
            })
        })
        .catch(error => {
            dispatch({
                type: SET_POSTS,
                payload: []
            })
        })
}

export const getPost = (postId) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.get(`/post/${postId}`)
        .then(result => {
            dispatch({
                type: SET_POST,
                payload: result.data
            })
            dispatch({ type: STOP_LOADING_UI })
        })
        .catch(error => console.log(error))
}
export const makePost = (newPost) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.post('/post', newPost)
        .then(result => {
            dispatch({
                type: MAKE_POST,
                payload: result.data
            })
            dispatch({ type: CLEAR_ERRORS })
        })
        .catch(error => {
            dispatch({ 
                type: SET_ERRORS ,
                payload: error.response.data
            })
        })
}

export const likePost = (postId) => (dispatch) => {
    axios.get(`/post/${postId}/like`)
        .then(result => {
            dispatch({
                type: LIKE_POST,
                payload: result.data
            })
        })
        .catch(error => console.log(error))
}

export const unlikePost = (postId) => (dispatch) => {
    axios.get(`/post/${postId}/unlike`)
        .then(result => {
            console.log('unlike payload', result.data)
            dispatch({
                type: UNLIKE_POST,
                payload: result.data
            })
        })
        .catch(error => console.log(error))
}

export const deletePost = (postId) => (dispatch) => {
    axios.delete(`/post/${postId}`)
        .then(() => {
            dispatch({ type: DELETE_POST, payload: postId })
        })
        .catch(error => console.log(error))
}

export const getUserData = (handle) => (dispatch) => {
    dispatch({ type: LOADING_DATA})
    axios.get(`/user/${handle}`)
        .then(result => {
            dispatch({
                type: SET_POSTS,
                payload: result.data.posts
            })
        })
        .catch(error => console.log(error))
}