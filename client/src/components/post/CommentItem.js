import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';
import { CardContent, CardHeader,Avatar, makeStyles,Grid, CardActions, IconButton, Icon} from '@material-ui/core'
import {Fieldset,Badge,Button} from '@geist-ui/react'
import { XSquare } from '@geist-ui/react-icons'





const styles ={
    separate:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
        
    },
    textanddelete:{
        display:'flex',
        justifyContent:'space-between',
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
        marginBottom:'1em',
        width:'100%'
    },
    crossbtn:{
        
        border:'none'
    }
}
const useStyles = makeStyles(styles)

const CommentItem = ({ postId, comment: { _id, text, name, avatar, user, date }, auth, deleteComment }) => {
    const classes = useStyles()
    return (
         <Fragment className={classes.colorcorrect}>
        
            
            <Fieldset className={classes.fieldset}>
                <div className={classes.separate}>
                    <Avatar src={avatar} size="medium" />

                <div className={classes.nameanddate}>
                <h4 style={{marginBottom:'0'}}>{name}</h4>
                <span><Moment className={classes.Date} format='YYYY/MM/DD'>{date}</Moment></span>
                </div>
                </div>
                
                <Fieldset.Subtitle style={{fontSize:'17px'}} >
                    <div className={classes.textanddelete}>
                            {text}
                {!auth.loading && user === auth.user._id && (
                        
                            <Button iconRight={<XSquare />} onClick={e => deleteComment(postId, _id)} type="error" ghost auto size="small" />
                        
                    )}
                    </div>
                </Fieldset.Subtitle>

            </Fieldset>
            
        
    
    </Fragment>
       
    )
}

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { deleteComment })(CommentItem);
