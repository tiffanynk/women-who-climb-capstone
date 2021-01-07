import { SET_POSTS, LIKE_POST, UNLIKE_POST, LOADING_DATA, DELETE_POST, MAKE_POST } from '../types';

const initialState = {
    posts: [],
    post: {},
    loading: false
}

export default function(state = initialState, action){
    switch (action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case SET_POSTS:
            console.log('set posts', action.payload)
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case LIKE_POST:
        case UNLIKE_POST:
        //chain these actions because they do the same thing
            let index = state.posts.findIndex(
                post => post.postId === action.payload.postId
            );
            state.posts[index] = action.payload;
            console.log('like payload', action.payload)
            return {
                ...state
            }
        case DELETE_POST:
            index = state.posts.findIndex(
                post => post.postId === action.payload
            )
            state.posts.splice(index, 1);
            return {
                ...state
            }
        case MAKE_POST:
            return {
                ...state,
                posts: [
                    action.payload,
                    ...state.posts
                ]
            }
        default:
            return state;
    }
}