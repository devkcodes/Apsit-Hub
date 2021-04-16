import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import "../../styles/PostForm.css"

//Rich text editor
import MUIRichTextEditor from 'mui-rte'
import { convertFromRaw, convertToRaw } from 'draft-js'
import { EditorState, ContentState } from 'draft-js';
import Divider from '@material-ui/core/Divider'


import {Card, Button,Icon,TextField,FormControl, Typography} from '@material-ui/core'


// import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles,MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { setAlert } from '../../actions/alert';

const formFont = createMuiTheme({
    palette: {
      primary: {
        main:"#fff",
      }},
    typography: {
      fontFamily: [
        'Share Tech', 'san-serif',
      ].join(','),
      fontSize:"1px",
      Fontcolor:"#F1304D"
  }});

const useStyles = makeStyles((theme) => ({

    divClass:{
    width:"98%",
    backgroundColor:'white',
    padding:'5px',
    marginBottom: '20px',
    marginTop:'50px',
    boxShadow:' 3px 3px 5px 6px #ccc'
    
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
color:'#FEFFFF',
marginLeft:"17vw",
margin:'5px',
backgroundColor:"#17252A",
['@media (max-width:1000px)']: {

    marginLeft:"42vw",
},
['@media (max-width:600px)']: {
    marginLeft:"53vw",
},

},



}));
  
const defaultTheme = createMuiTheme()
  Object.assign(defaultTheme, {
    overrides: {
        MUIRichTextEditor: {
            root: {
                marginTop: '0',
                width: "100%",
                display:'flex',
                border:"5px double #17252A",
                

            },
            editor: {
                padding:"40px",
                backgroundColor:'#DEF2F1',
                
            
            },
            toolbar:{

            marginTop:'-10px',
            borderBottom:'5px double #17252A',
            
            },

        }
    }
})



const PostForm = ({ addPost }) => {
    const classes = useStyles();
    const [text, setText] = useState("");
    useEffect(() => {
    }, [text])

    const [editorState, setEditorState] = useState()


    return (
            <div className={classes.divClass} >
                <FormControl  className={classes.text}>
                <MuiThemeProvider theme={formFont}><h3  style={{margin:"5%",}} > Create a post!</h3></MuiThemeProvider>

                    <MuiThemeProvider theme={defaultTheme}>
                        <Divider/>
                    <MUIRichTextEditor 
                    label="Type your requirements here..."
                    
                    text={text}
                    onChange={(editorState)=>{
                        let contentState = editorState.getCurrentContent();
                        
                        setText(JSON.stringify(convertToRaw(contentState)))

                    }}
                    
				            required
                            className={classes.rte}
                    />
                        <Divider/>

                    </MuiThemeProvider>
                
                </FormControl>
                <Button
                    className={classes.buttonSend}
                    onClick={e => {
                        e.preventDefault();
                        if(text==null||text==""){
                            setAlert('Please enter something!')
                        }
                        else
                        addPost({ text });
                        setText("");       
                        
                    }}
                    variant="contained"
                    endIcon={<SendIcon />}
                    disabled={text=== ''}

                    >Post!</Button>
            </div>
            

    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired

}

export default connect(null, { addPost })(PostForm)
