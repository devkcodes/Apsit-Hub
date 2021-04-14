import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';

import { Grid, makeStyles } from '@material-ui/core'
import {Button} from '@geist-ui/react'
import { ArrowLeft } from '@geist-ui/react-icons'


const styles = {
containerRoot: {
        marginTop:'5rem',
        width:'70%',
        // ['@media (max-width:1000px)']: {

        //     margin: '0',
        //     padding: '0'
        // },
        ['@media (max-width:600px)']: {
            width:'94%',
            marginTop:'8.5rem',
        },
    },
    backButton:{
        padding:'50px',
        margin:"2%"
    }
}
const useStyles = makeStyles(styles)

const Post = ({ getPost, post: { post, loading }, match }) => {

        const classes = useStyles()
        
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost]);


    return loading || post === null ? <Spinner /> : <Fragment>
        <div className={classes.containerRoot}>
            <Link to='/posts' className='btn'>
            <Button className={classes.backButton} size="mini" shadow type="secondary"><ArrowLeft/>Back To Posts</Button></Link>
            
        <PostItem post={post} postPage ={true}  />

        <CommentForm postId={post._id} />
        <div className='comments'>
            {post.comments.map(comment => (
                <CommentItem key={comment._id} comment={comment} postId={post._id} />
            ))}
        </div>
        </div>
        
    </Fragment>
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post)
