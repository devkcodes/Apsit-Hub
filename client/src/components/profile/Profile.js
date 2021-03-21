import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileGithub from './ProfileGithub';
import ProfileAbout from "./ProfileAbout";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
import { getProfileById } from "../../actions/profile";


//Geist UI
import {Card, Text, Divider,Code} from '@geist-ui/react' 

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'




const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        color: 'white'
    },
    containerRoot: {
        marginTop:'10em',
				width:'90vw'

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
								<Grid container 
								direction="row"
  							  justify="space-between"
								  className={classes.containerRoot}>
									<ProfileLeft profile ={profile}/>
									<ProfileRight profile ={profile}/>
								</Grid>
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
