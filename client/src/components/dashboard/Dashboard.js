//ui imports
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Paper from '@material-ui/core/Paper';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//normal
import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrentProfile, deleteAccount, createProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from "./DashboardActions";

import CreateProfile from '../profile-forms/CreateProfile'


//Geist UI
import {Card, Text, Divider,Code} from '@geist-ui/react' 


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        color: 'white'
    },
    containerRoot: {
        marginTop:'10em'

    },
    welcome: {

    }


}));



const Dashboard = ({ deleteAccount, getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {

        getCurrentProfile();
    }, [getCurrentProfile]);

    const classes = useStyles();



    // return loading && profile === null ? <Spinner /> : <Fragment>

    //     {profile !== null ? (
    //         <Fragment>
    //             <Redirect to={`/profile/${user._id}`} />
    //         </Fragment>) :
    //         (<Fragment>
    //             <CreateProfile />
    //         </Fragment>)}
    // </Fragment>;

    return loading && profile === null ? (
        <Spinner />) : (

        <Fragment>
            <div className={classes.root}>
                <div className={classes.containerRoot}>

                
                	<Card  width="400px">
                        <Card.Content>
                            <Text b>Description</Text>
                        </Card.Content>
                        <Divider y={0} />
                        <Card.Content>
                            <Text>The Object constructor creates an object wrapper for the given value.</Text>
                            <Text>When called in a non-constructor context, Object behaves identically to <Code>new Object()</Code>.</Text>
                        </Card.Content>
                        <Divider y={0} />
                        <Card.Content>
                            <Text>The Object constructor creates an object wrapper for the given value.</Text>
                            <Text>When called in a non-constructor context, Object behaves identically to <Code>new Object()</Code>.</Text>
                        </Card.Content>
                        </Card>
                </div>
            </div>
        </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
