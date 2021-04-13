import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post'
import {Divider, CardContent, CardHeader,Avatar, makeStyles,Grid, CardActions, IconButton, Icon} from '@material-ui/core'
import {Fieldset,Badge,Button,Spacer} from '@geist-ui/react'
import {ThumbsUp , ThumbsDown,MessageSquare,XSquare   } from '@geist-ui/react-icons'


import { convertFromRaw } from 'draft-js'
import { stateToHTML } from "draft-js-export-html";

const styles ={
    Card:{
        color:'black',
        marginBottom:'1em',
        width:'100%',
        boxShadow:' 3px 3px 5px 5px #ccc',
        backgroundColor:"#3AAFA9",color:"#17252A",border:'0.5px dashed  #17252A',
        
    },
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
        color:'black',
        backgroundColor:'#3AAFA9'
    },
        fieldset:{
        
    },
    btnclass:{
        marginRight:'5px'
    },
    likesnum:{
        padding:'3.5px',
        fontSize:'18px',
        border:'2px solid #2B7A78',
        borderRadius:'4px',
        marginRight:'5px',
        paddingRight:'9px',
        paddingLeft:'9px',
        backgroundColor:'white'
        
    },
}
const useStyles = makeStyles(styles)
const PostItem = ({ addLike, deletePost, removeLike, auth, post: { _id, text, name, avatar, user, likes, comments, date }, showActions }) =>{
    const classes = useStyles()


    let styled_text = stateToHTML((convertFromRaw(JSON.parse(text))))



return(
    <Fragment className={classes.colorcorrect}>
        {showActions&&
            
            <Fieldset className={classes.Card}   
            >
                
                <div className={classes.separate}>
                    <Avatar src={avatar} size="medium" />

                <div className={classes.nameanddate}>
                <h4 style={{marginBottom:'0'}}>{name}</h4>
                <span><Moment className={classes.Date} format='YYYY/MM/DD'>{date}</Moment></span>
                </div>
                </div>
                
                <Fieldset.Subtitle style={{fontSize:'17px'}}>
                <div className="content" dangerouslySetInnerHTML={{__html:styled_text}}></div>
                </Fieldset.Subtitle>
                
                <Fieldset.Footer style={{backgroundColor:"#17242A",color:"#17252A",border:'0.5px dashed  #17252A',marginTop:'-20px',border:"2px solid #17242A"}} >
                    <Fieldset.Footer.Actions>
                        <span >{likes.length > 0 && <div className={classes.likesnum}>{likes.length}</div> } </span>
                        <Button className={classes.btnclass} iconRight={<ThumbsUp/>} onClick={() => addLike(_id)} type="success" ghost auto size="small" >
                        </Button>

                        <Button className={classes.btnclass} iconRight={<ThumbsDown/>} onClick={() => removeLike(_id)} type="secondary" ghost auto size="small" >
                        </Button>
                    <Link className={classes.btnclass}  to={`/posts/${_id}`}>
                        <Button iconRight={<MessageSquare/>} type="secondary" ghost auto size="small" >
                        </Button>
                    </Link>
                    {!auth.loading && user === auth.user._id && (
				    <Button iconRight={<XSquare/>} onClick={() => deletePost(_id)} type="error" ghost auto size="small"/>
			)}
                    </Fieldset.Footer.Actions>
                </Fieldset.Footer>
                <Divider y={0} />
            </Fieldset>
            
        }
    
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
