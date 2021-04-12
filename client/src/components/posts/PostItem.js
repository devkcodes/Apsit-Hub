import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post'
import { CardContent, CardHeader,Avatar, makeStyles,Grid,Button, CardActions, IconButton, Icon} from '@material-ui/core'
import {Fieldset,Badge} from '@geist-ui/react'
import {ThumbsUp , ThumbsDown } from '@geist-ui/react-icons'
import Divider from "@material-ui/core/Divider"

import { convertFromRaw } from 'draft-js'
import { stateToHTML } from "draft-js-export-html";

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
        color:'black',
        border:'2px solid red'
    },
        fieldset:{
        color:'black',
        marginBottom:'1em',
        border: "5px solid red",
    },
    footer:{
        backGroundColor:'#000000'
    }
}
const useStyles = makeStyles(styles)
const PostItem = ({ addLike, deletePost, removeLike, auth, post: { _id, text, name, avatar, user, likes, comments, date }, showActions }) =>{
    const classes = useStyles()


    let styled_text = stateToHTML((convertFromRaw(JSON.parse(text))))



return(
    <Fragment className={classes.colorcorrect}>
        {showActions&&
            
            <Fieldset className={classes.fieldset}   style={{backgroundColor:"black",color:"white",border:"2px solid #62BCE6"}}
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
                
                <Fieldset.Footer style={{ backgroundColor:'#000000', margin:"0",border:"2px solid #62BCE6"}}>
                    <Fieldset.Footer.Actions>
                    <Badge size="mini" style={{marginRight:'10px'}}>
                        <button style={{border:'none',background:'none'}} onClick={() => addLike(_id)} type="button">
                    <ThumbsUp size={20}color='#F1304D'/>
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
