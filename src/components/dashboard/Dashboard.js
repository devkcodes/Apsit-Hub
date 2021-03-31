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


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        color: 'white'
    },
    containerRoot: {
        marginTop: '80px',
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
            <Grid className={classes.containerRoot}>
                <Grid item className={classes.welcome}>
                    <h1 className='large text-primary'>Dashboard</h1>
                    <p className='lead' >
                        <i className='fas fa-user' />Welcome {user && user.name}
                    </p>
                </Grid>
                {profile !== null ? (
                    <Fragment>
                        <DashboardActions />
                        {/* <Education education={profile.education} /> */}
                        <div className='my-2'></div>
                        <button className="btn btn-danger" onClick={() => deleteAccount()}>
                            <i className='fas fa-user-minus'></i> Delete My Account
                        </button>                   </Fragment>
                ) : (
                    <Fragment>
                        {/* <p>You have not setup your profile yet, please add some info</p>
                            <Link to='/create-profile' className='btn btn-primary my-1'>Create Profile</Link> */}
                        <CreateProfile />
                    </Fragment>
                )}
            </Grid>
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
