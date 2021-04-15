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
import {Button} from '@material-ui/core'
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
        padding:'10',
        margin:"2%",
        marginLeft:"0",
        backgroundColor:"#2B7A78",
        color:'white'
    },
    postcontainer:{
        padding:'0'
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
            <Button className={classes.backButton} size="medium" shadow type="secondary">Back To Posts</Button></Link>
            <div  className={classes.postcontainer}>
        <PostItem post={post} postPage ={true}  />
        </div>
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
