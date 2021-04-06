import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import "../../styles/PostForm.css"
import Card from '@material-ui/core/Card'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  divClass:{
      width:"98%",
      backgroundColor:'white',
      padding:'5px',
      marginBottom: '20px',
      
  },
  text:{
      width:'37vw',
      ['@media (max-width:1000px)']: {

        width:'62vw',
    },
    ['@media (max-width:600px)']: {
        width:'74vw',
    },

},
buttonSend: {
width:'20vw',
marginLeft:"17vw",
margin:'5px',
['@media (max-width:1000px)']: {

    marginLeft:"42vw",
},
['@media (max-width:600px)']: {
    marginLeft:"53vw",
},

}


}));


const PostForm = ({ addPost }) => {
    const classes = useStyles();
    const [text, setText] = useState('');
    return (
        <div >

            <div >
                <h3>Say Something...</h3>
            </div>
            <div className={classes.divClass} >
                <FormControl  className={classes.text}
                   >
                    <TextField
                    
                        
                        name="text"
                        rows={6}
                        rowsMax={10}
                        // columns={10}
                        color="white"
                        variant="outlined"
                        placeholder="Create a post"
                        value={text} onChange={e => setText(e.target.value)}
                        multiline
                        required
                    ></TextField>
                   
                </FormControl>
                <Button
                    className={classes.buttonSend}
                     onClick={e => {
                       
                        e.preventDefault();
                        addPost({ text });
                        setText(' ');
                    }}
                    variant="contained"
                    endIcon={<SendIcon />}


                    >Post!</Button>
            </div>

        </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired

}

export default connect(null, { addPost })(PostForm)
