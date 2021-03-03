import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Post from '../components/Post';
import Profile from '../components/Profile';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions';
class home extends Component {
    // state = {
    //     posts: null
    // }

    componentDidMount(){
        this.props.getPosts()
        // axios.get('/posts')
        //     .then(result => {
        //         console.log('post data', result.data)
        //         this.setState({
        //             posts: result.data
        //         })
        //     })
        //     .catch(error => console.log(error))
    }

    render() {
        // let recentPosts = this.state.posts ? (
        //     this.state.posts.map(post => <Post key={post.postId} post={post}/>)
        // ) : <p>Loading...</p>

        const { posts, loading } = this.props.data;
        console.log('render', this.props.data)
        let recentPosts = !loading ? (
            posts.map(post => <Post key={post.postId} post={post} />)
        ) : (
            <p>Loading...</p>
        );

        return (
            <div className='container'>
            <Grid container spacing={4}>
                <Grid item sm={6} xs={12}>
                    {recentPosts}
                </Grid>
                <Grid item sm={4} xs={8}>
                    <Profile />
                </Grid>
            </Grid>
            </div>
        )
    }
}

// export default home;

home.propTypes = {
    getPosts: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps,
    { getPosts }
)(home);