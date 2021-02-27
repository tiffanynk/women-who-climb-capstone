import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import Post from '../components/Post';
import StaticProfile from '../components/StaticProfile';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getUserData } from '../redux/actions/dataActions';

class user extends Component {
    state = {
        profile: null
    }

    componentDidMount() {
        const handle = this.props.match.params.handle;
        this.props.getUserData(handle)
        axios.get(`/user/${handle}`)
            .then(result => {
                this.setState({
                    profile: result.data.user
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        const { posts, loading } = this.props.data

        const postsMarkup = loading ? (
            <p>Loading Posts</p>
        ) : posts === null ? (
            <p>No user posts</p>
        ) : (
            posts.map(post => <Post key={post.postId} post={post} />)
        )
        return (
            <Grid container spacing={4}>
                <Grid item sm={6} xs={12}>
                    {postsMarkup}
                </Grid>
                <Grid item sm={4} xs={8}>
                    {this.state.profile === null ? (
                        <p>Loading Profile</p>
                    ) : (
                    <StaticProfile profile={this.state.profile} />
                    )
                    }
                </Grid>
            </Grid>
        )
    }
}

user.propTypes = {
    getUserData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps, {getUserData})(user)