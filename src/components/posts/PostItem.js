import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post'
import {Card, CardContent, CardHeader,Avatar, makeStyles, CardActions, IconButton, Icon} from '@material-ui/core'
const styles ={
    cardRoot:{
        
        backgroundColor:'rgb(22, 27, 34,0.5)',
        border:'gray solid 0.01px',
        marginBottom:'1.5rem',
        color:'rgb(201, 209, 217)',
        textDecoration:'none',
        ['@media (max-width:600px)']:{
            height:'9rem'
        }
    },
    cardHeader:{
        color:'rgb(201, 209, 217)',
        ['@media (max-width:600px)']:{
            height:'1em'
        }
    },
    cardActions:{
        borderTop:'gray solid 0.01px',
        fontSize:'1rem',
        ['@media (max-width:600px)']:{
            fontSize:'11px',
        }
    },
    actionButton:{
        fontSize:'1rem',
        color:'white',
        textDecoration:'none'
    },
    Date:{
        color:'rgb(201, 209, 217)',
        fontSize:'0.7rem'
    }
    ,
root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor:'red',
    color:'rgb(201, 209, 217)',
  },
}
const useStyles = makeStyles(styles)
const PostItem = ({ addLike, deletePost, removeLike, auth, post: { _id, text, name, avatar, user, likes, comments, date }, showActions }) =>{
    const classes = useStyles()




return(
    <Fragment>
    {showActions&& <Card className={classes.cardRoot}>
        <Link to={`/profile/${user}`}>
        <CardHeader
        className={classes.cardHeader}
        avatar={
            <Avatar src ={avatar} aria-label="recipe" className={classes.avatar}>
            </Avatar>
        }
        title={name}
        subheader={
        <Moment className={classes.Date} format='YYYY/MM/DD'>{date}</Moment>
        }
        />
        </Link>
        <CardContent>{text}</CardContent>
        <CardActions  className={classes.cardActions}>
            <IconButton className={classes.actionButton}  onClick={e => addLike(_id)}><i class="fas fa-thumbs-up"></i>{" "}
                <span>{likes.length > 0 &&
                    <span >{likes.length}</span>
                }</span>
            </IconButton>
            <IconButton className={classes.actionButton} onClick={e => removeLike(_id)}>
                    <i class="fas fa-thumbs-down"></i>
            </IconButton>
            <IconButton className={classes.actionButton}>
                <Link to={`/posts/${_id}`} >
                <i class="fas fa-comment"></i>
                {"  "}{comments.length > 0 && (
                    <span class='comment-count'>{comments.length}</span>
                )}
            </Link>
            </IconButton>
            <IconButton className={classes.actionButton} onClick={e => deletePost(_id)}>
                    <i class="fas fa-times"></i>
            </IconButton>
        </CardActions>
    </Card>}
    </Fragment>

)
}

PostItem.defaultProps = { showActions: true };

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, { deletePost, addLike, removeLike })(PostItem)
