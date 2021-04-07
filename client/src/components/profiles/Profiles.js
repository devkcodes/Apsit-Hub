
//ui imports
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Paper from '@material-ui/core/Paper';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem'
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GridList from '@material-ui/core/GridList';

//Geist
import {AutoComplete} from '@geist-ui/react'

//normal 
import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import SearchBar from './searchbar';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        color: 'white',
        backgroundColor: "grey"
    },
    container: {
        marginTop: "80px",
        display: "flex",
        flexDirection: "row"
    },
    paper: {
        width: '90%',
        height: '30%'
    },
    gridProfile: {
        width: '90 %',
        height: '20%',

        padding: "20px",
        
        padding: "20px"
    },
    TextGrid: {
        padding:"50px"
    },
    searchBar:{
        color: "white",
        width:"50%",
    }


}));


const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);
    const classes = useStyles();
   
    console.log(`my profilesssssssssssssssss ${profiles[0]}`)
    console.log(JSON.stringify(profiles))

    return <Fragment

    >
        {loading ? <Spinner /> :
                    <Grid container className={classes.container}>
<SearchBar/>
                    <Grid container className={classes.TextGrid} >
                        
                    </Grid>

                    <Grid container className={classes.gridProfile} direction="row" justify="flex-start">
                        {profiles.length > 0 ? (
                            profiles.map(profile => (<ProfileItem key={profile._id} profile={profile} />))
                        ) : <h4>No profiles found...</h4>}
                    </Grid>
                    </Grid>

              
           

        }
    </Fragment >
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
