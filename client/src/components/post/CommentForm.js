import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import {Textarea,Card} from '@geist-ui/react'
import {  makeStyles,Button } from '@material-ui/core'


const styles = {
    containerRoot: {
        marginTop: "80px",
        border: 'gray solid 5px',
        borderTop: 'none',
        marginLeft: '20%',
        marginRight: '20%',
        backgroundColor:"#DED5CB",
        ['@media (max-width:1000px)']: {

            margin: '0',
            padding: '0'
        },
        ['@media (max-width:600px)']: {
            margin: '0',
            padding: '0'
        },
        },
        textarea:{
            marginBottom:'30px',
            height: '170px',
            ['@media (max-width:1000px)']: {
                height: '170px',
            margin: '0',
            padding: '0',
            
        },
        ['@media (max-width:600px)']: {
            margin: '0',
            padding: '0',
            width:'100%',
            height: '170px',

        },
        },
        submitbtn:{
            backgroundColor:'black',
            padding:'10',
            color:'white',
            border:'none',
            borderRadius:"4px",
            margin:'5px',
            // marginLeft:'95%',
            float: 'right',
            '&:hover':{
                color:'black',
            }

        

        },
        postForm:{
            marginBottom:"10px",
            
        }
}
const useStyles = makeStyles(styles)


const CommentForm = ({ postId, addComment }) => {
    const [text, setText] = useState('')
        const classes = useStyles()
    return (
        <div className={classes.postForm}>
            <Card type='lite' className={classes.textarea}>
                <form class="form my-1" onSubmit={e => {
                e.preventDefault();
                addComment(postId, { text });
                setText('');
            }}>
                <Textarea width="100%" 
                value={text}
				onChange={(e) => setText(e.target.value)}
				required
                placeholder="You are here! Leave a comment ?" />
                <Button  type="submit"className={classes.submitbtn} value="Submit" >Comment</Button>
            </form>
            </Card>
            
            
        </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default connect(null, { addComment })(CommentForm);