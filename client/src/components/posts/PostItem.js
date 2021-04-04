import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post'
import { CardContent, CardHeader,Avatar, makeStyles,Grid,Button, CardActions, IconButton, Icon} from '@material-ui/core'
import {Fieldset,Badge} from '@geist-ui/react'
import {ThumbsUp , ThumbsDown } from '@geist-ui/react-icons'
const styles ={
    separate:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    nameanddate:{
        marginLeft:'20px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        marginBottom:'0'

    },
    Date:{
        fontSize:'13px'
    },
    colorcorrect:{
        color:'black'
    },
        fieldset:{
        color:'black',
        marginBottom:'1em'
    },
}
const useStyles = makeStyles(styles)
const PostItem = ({ addLike, deletePost, removeLike, auth, post: { _id, text, name, avatar, user, likes, comments, date }, showActions }) =>{
    const classes = useStyles()




return(
    <Fragment className={classes.colorcorrect}>
        {showActions&&
            
            <Fieldset className={classes.fieldset}>
                <div className={classes.separate}>
                    <Avatar src={avatar} size="medium" />

                <div className={classes.nameanddate}>
                <h4 style={{marginBottom:'0'}}>{name}</h4>
                <span><Moment className={classes.Date} format='YYYY/MM/DD'>{date}</Moment></span>
                </div>
                </div>
                
                <Fieldset.Subtitle style={{fontSize:'17px'}}>
                {text}
                </Fieldset.Subtitle>
                
                <Fieldset.Footer>
                    <Fieldset.Footer.Actions>
                    <Badge size="mini" style={{marginRight:'10px'}}>
                        <button style={{border:'none',background:'none'}} onClick={() => addLike(_id)} type="button">
                    <ThumbsUp size={20}color='orange'/>
                    </button>
                    <span >{likes.length > 0 && <span style={{padding:'10px', marginTop:'2rem',fontSize:'20px'}}>{likes.length}</span>}</span>
                    </Badge>
                    <Badge>
                    <button style={{border:'none',background:'none'}} onClick={() => removeLike(_id)} type="button"> 
                    <ThumbsDown color="orange"/>
                    </button>
                    </Badge>
                    </Fieldset.Footer.Actions>
                </Fieldset.Footer>
            </Fieldset>
            
        }
    {/* {showActions&& <Card className={classes.cardRoot}>
        <Link to={`/profile/${user}`}>
        <CardHeader
        className={classes.cardHeader}
        avatar={
            <Avatar src ={avatar} className={classes.avatar}>
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
    </Card>} */}
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
