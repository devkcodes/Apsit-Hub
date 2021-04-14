import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";

import ProfileGithub from './ProfileGithub';
import ProfileAbout from "./ProfileAbout";
import ProfileLeft from "./ProfileLeft";
import { getProfileById } from "../../actions/profile";
import Alert from "../layout/Alert"


//Geist UI
import {Card, Text, Divider,Code} from '@geist-ui/react' 

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import CreateProfile from "../profile-forms/CreateProfile";




const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        color: 'white'
    },
    containerRoot: {
        marginTop:"80px",
				width:'90vw',
				display:'flex',
    },
	

}));

function Profile({ match, getProfileById, profile: { profile,user, loading }, auth }) {


	const classes = useStyles();

	useEffect(() => {
		getProfileById(match.params.id)
	}, [getProfileById])


const _id = 0;
const user_id =0;
console.log(auth)

	console.log(_id)

	return (
		
			<Fragment>
				
				{ ( profile===null)  ? <CreateProfile/> :
				<Fragment>
				{ profile === null || loading ? (
					<Spinner />
				) : (
						<Fragment>
							{/* <div className={classes.root}> */}
							
								<Grid container 
								direction="row"
  							  justify="space-between"
									alignContent="center"
								  className={classes.containerRoot}>
										<Grid item xs={12} md={5}>
									<ProfileLeft  profile ={profile}/>
									</Grid>
									<Grid style={{backgroundColor:'black'}} item xs={12} md={6}>
									<ProfileGithub username={profile.githubusername}/>
									</Grid>
									
								</Grid>
							{/* </div> */}
						</Fragment>
					)}
					</Fragment>
}
			</Fragment>
		
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
