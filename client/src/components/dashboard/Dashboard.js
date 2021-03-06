import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrentProfile, deleteAccount, createProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from "./DashboardActions";
import Education from './Education';
import CreateProfile from '../profile-forms/CreateProfile'


const Dashboard = ({ deleteAccount, getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);





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
                <h1 className='large text-primary'>Dashboard</h1>
                <p className='lead' >
                    <i className='fas fa-user' />Welcome {user && user.name}
                </p>
                {profile !== null ? (
                    <Fragment>
                        <DashboardActions />
                        {/* <Education education={profile.education} /> */}
                        <div className='my-2'></div>
                        <button className="btn btn-danger" onClick={() => deleteAccount()}>
                            <i className='fas fa-user-minus'></i> Delete My Account
                        </button>                    </Fragment>
                ) : (
                        <Fragment>
                            {/* <p>You have not setup your profile yet, please add some info</p>
                            <Link to='/create-profile' className='btn btn-primary my-1'>Create Profile</Link> */}
                            <CreateProfile />
                        </Fragment>
                    )}
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
