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
    containerRoot: {
        marginTop: "80px",
        border: 'gray solid 0.01px',
        borderTop: 'none',
        marginLeft: '20%',
        marginRight: '20%',
        ['@media (max-width:1000px)']: {

            margin: '0',
            padding: '0'
        },
        ['@media (max-width:600px)']: {
            margin: '0',
            padding: '0'
        }

    },
    gridItem: {
        width: '65%',
        ['@media (max-width:600px)']: {
            width: '80%',
            margin: '0',

        }
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
                    <Grid item xs={12} >
                        <p>Recent Activity</p>
                    </Grid>
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
