import {
    SET_USER, 
    SET_ERRORS, 
    CLEAR_ERRORS, 
    LOADING_UI,
    SET_UNAUTHENTICATED
} from '../types';
import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/login', userData)
            .then(result => {
                setAuthorizationHeader(result.data.token)
                dispatch(getUserData())
                dispatch({ type: CLEAR_ERRORS })
                history.push('/home')
            })
            .catch(error => {
                dispatch({ 
                    type: SET_ERRORS, 
                    payload: error.response.data
                })
            })
}

export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/signup', newUserData)
            .then(result => {
                setAuthorizationHeader(result.data.token)
                dispatch(getUserData())
                dispatch({ type: CLEAR_ERRORS })
                history.push('/home')
            })
            .catch(error => {
                dispatch({ 
                    type: SET_ERRORS, 
                    payload: error.response.data
                })
            })
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken')
    delete axios.defaults.headers.common['Authorization']
    dispatch({ type: SET_UNAUTHENTICATED })
}

export const getUserData = () => (dispatch) => {
    axios.get('/user')
        .then(result => {
            dispatch({ 
                type: SET_USER,
                payload: result.data
            })
        })
        .catch(error => console.log(error))
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`
    localStorage.setItem('FBIdToken', FBIdToken)
    axios.defaults.headers.common['Authorization'] = FBIdToken
}