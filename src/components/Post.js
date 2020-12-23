import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
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
            } } = this.props
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
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Post);
