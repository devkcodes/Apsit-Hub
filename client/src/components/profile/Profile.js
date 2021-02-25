import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../actions/profile";

function Profile({ match, getProfileById, auth, profile: { profile, loading } }) {
  return (
    <div>
      <Fragment>
			{profile === null || loading ? (
				<Spinner />
			) : (
				<Fragment>
				  <h1 className="large text-primary"> Dashboard </h1>

        <p className="lead">
            <i className="fa fa-user"></i> Welcome {auth.user && auth.user.name}
        </p>
						
            	<Link to="/edit-profile">
						Edit Profile
					</Link>
			
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
