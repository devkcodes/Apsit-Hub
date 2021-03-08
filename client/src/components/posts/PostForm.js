import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import "../../styles/PostForm.css"
import Card from '@material-ui/core/Card'

const PostForm = ({ addPost }) => {
    const [text, setText] = useState('');
    return (
        <div class="post-form-container">
           
            <div class="bg-primary p">
                <h3>Say Something...</h3>
            </div>
            <div className="post-form">
            <form class="form my-1" onSubmit={e => {
                e.preventDefault();
                addPost({ text });
                setText(' ');
            }}>
                <textarea
                    className="post-text"
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Create a post"
                    value={text} onChange={e => setText(e.target.value)}
                    required
                ></textarea>
                <input type="submit" class="inputbtn" value="Submit" />
            </form>
            </div>
            
        </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired

}

export default connect(null, { addPost })(PostForm)
