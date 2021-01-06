import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { likePost, unlikePost } from '../redux/actions/dataActions';
import DeletePost from './DeletePost';
import UserButton from '../util/UserButton';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    image: {
        minWidth: 100,
        minHeight: 150,
        marginLeft: 10,
        // margin: '10px 10px 10px 10px',
        // backgroundSize: 'cover',
        // objectFit: 'scale-down'
    },
    content: {
        padding: 25
    }
}

class Post extends Component {
    likedPost = () => {
        if(this.props.user.likes && this.props.user.likes.find(like => like.postId === this.props.post.postId))
            return true
        else 
            return false
    }

    likePost = () => {
        this.props.likePost(this.props.post.postId)
    }

    unlikePost = () => {
        this.props.unlikePost(this.props.post.postId)
    }
    
    render() {
        dayjs.extend(relativeTime)
        const {
            classes, 
            post: {
                postId, 
                userImage, 
                body, 
                createdAt, 
                userHandle, 
                likeCount, 
                commentCount 
            },
            user: {
                authenticated,
                credentials: { handle }
            } 
        } = this.props

        const likeButton = !authenticated ? (
            <UserButton
                tipTitle='Like'
            >
                <Link to='/login'>
                    <FavoriteBorder color='primary'/>
                </Link>
            </UserButton>
        ) : (
            this.likedPost() ? (
                <UserButton 
                    tipTitle='Unlike'
                    onClick={this.unlikePost}
                >
                    <FavoriteIcon color='primary'/>
                </UserButton>
            ) : (
                <UserButton 
                tipTitle='Like'
                onClick={this.likePost}
            >
                <FavoriteBorder color='primary'/>
            </UserButton>
            )

        )
        
        const deleteButton = authenticated && userHandle === handle ? (
            <DeletePost postId={postId}/>
        ) : null
        
        return (
            <Card key={postId} className={classes.card}>
                <CardMedia 
                    image={userImage}
                    title='Profile Image'
                    className={classes.image}
                />
                <CardContent className={classes.content}>
                    <Typography 
                        variant='h5' 
                        color='primary'
                        component={Link} 
                        to={`/users/${userHandle}`}
                    >
                        @{userHandle}
                    </Typography>
                    {deleteButton}
                    <Typography 
                        variant='body2' 
                        color='textSecondary'
                    >
                        {dayjs(createdAt).fromNow()}
                    </Typography>
                    <Typography 
                        variant='body1'>
                        {body}
                    </Typography>
                    {likeButton}
                    <span>{`${likeCount}`} likes</span>
                    <UserButton
                        tipTitle='comments'
                    >
                        <ChatIcon color='primary'/>
                    </UserButton>
                    <span>{`${commentCount}`} comments</span>
                </CardContent>
            </Card>
        )
    }
}

Post.propTypes = {
    likePost: PropTypes.func.isRequired,
    unlikePost: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    user: state.user
})

const mapActionsToProps = {
    likePost,
    unlikePost
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Post));
