import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileGithub from './ProfileGithub';
import ProfileAbout from "./ProfileAbout";
import { getProfileById } from "../../actions/profile";

//Geist UI
import {Card, Text, Divider,Code} from '@geist-ui/react' 

//Material UI
import { makeStyles } from '@material-ui/core/styles';



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

function Profile({ match, getProfileById, auth, profile: { profile, loading } }) {


	const classes = useStyles();

	useEffect(() => {
		getProfileById(match.params.id)
	}, [getProfileById])


	return (
		<div>
			<Fragment>
				{profile === null || loading ? (
					<Spinner />
				) : (
						<Fragment>
							<div className={classes.root}>
								<div className={classes.containerRoot}>
									<ProfileTop profile={profile} />
									<ProfileAbout profile={profile}/>
									<ProfileGithub/>
								</div>
							</div>
						</Fragment>
					)}
			</Fragment>
		</div>
	)
}

Profile.propTypes = {
	getProfileById: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
