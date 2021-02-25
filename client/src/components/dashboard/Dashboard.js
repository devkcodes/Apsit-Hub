import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from "./DashboardActions";
import Experience from './Experience';
import CreateProfile from '../profile-forms/CreateProfile'


const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);





    return loading && profile === null ? <Spinner /> : <Fragment>
       
        {profile !== null ? (
            <Fragment>
        <Redirect to={`/profile/${user._id}`}/>
            </Fragment>) :
            (<Fragment>
                <CreateProfile/>
            </Fragment>)}
    </Fragment>;
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
