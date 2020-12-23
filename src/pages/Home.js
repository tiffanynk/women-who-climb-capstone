import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Post from '../components/Post';
import Profile from '../components/Profile';

class home extends Component {
    state = {
        posts: null
    }

    componentDidMount(){
        axios.get('/posts')
            .then(result => {
                console.log(result.data)
                this.setState({
                    posts: result.data
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        let recentPosts = this.state.posts ? (
            this.state.posts.map(post => <Post key={post.postId} post={post}/>)
        ) : <p>Loading...</p>
        return (
            <div className='container'>
            <Grid container spacing={6}>
                <Grid item sm={6} xs={12}>
                    {recentPosts}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Profile />
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default home;