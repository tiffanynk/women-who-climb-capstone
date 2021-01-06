import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Post from '../components/Post';
import Profile from '../components/Profile';

// import { connect } from 'react-redux';
// import { getScreams } from '../redux/actions/dataActions';
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
            // this.props.getScreams();
    }
    render() {
        let recentPosts = this.state.posts ? (
            this.state.posts.map(post => <Post key={post.postId} post={post}/>)
        ) : <p>Loading...</p>

        // const { posts, loading } = this.props.data;
        // let recentPostssMarkup = !loading ? (
        //     posts.map((post) => <Post key={post.postId} post={post} />)
        // ) : (
        //     <PostSkeleton />
        // );

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

// home.propTypes = {
//     getPosts: PropTypes.func.isRequired,
//     data: PropTypes.object.isRequired
//   };

//   const mapStateToProps = (state) => ({
//     data: state.data
//   });

//   export default connect(
//     mapStateToProps,
//     { getPosts }
//   )(home);