import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import PostForm from './PostForm';
import Navbar from '../layout/Navbar'
import { Grid, makeStyles } from '@material-ui/core'

const styles = {
    body:{
        backgroundColor:"#C59D85",
    },
    containerRoot: {
        marginTop: "0px",
        boxShadow:"0px 0px 2px 2px #2B7A78",
        boxShadowBottom:"none",

        borderTop: 'none',
        marginLeft: '20%',
        marginRight: '20%',
        borderBottom: 'none',
        backgroundColor:"white",
        ['@media (max-width:1000px)']: {

            margin: '0',
            marginTop:'15px',
            padding: '0'
        },
        ['@media (max-width:600px)']: {
            margin: '0',
            marginTop:'45px',
            padding: '0'
        }

    },
    gridItem: {
        width: '65%',
        ['@media (max-width:600px)']: {
            width: '80%',
            margin: '0',
            

        },
        // border: '1px solid red'
    }
}
const useStyles = makeStyles(styles)

const Posts = ({ getPosts, post: { posts, loading } }) => {
    const classes = useStyles()
    useEffect(() => {
        getPosts();
    }, [getPosts]);


    return (

        loading ? <Spinner /> : (
            <Fragment>

                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.containerRoot}
                >
                    
                    <Grid item className={classes.gridItem}>
                        <PostForm />
                    </Grid>


                    {posts.map(post => (<Grid item xs className={classes.gridItem}><PostItem key={post._id} post={post} /></Grid>
                    ))}


                </Grid>
                


            </Fragment>
        )

    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ post: state.post });

export default connect(mapStateToProps, { getPosts })(Posts);
