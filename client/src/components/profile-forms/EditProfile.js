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
import MenuItem from '@material-ui/core/MenuItem'
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';




//normal
import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions/profile';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({ profile: { profile, loading }, deleteAccount, createProfile, getCurrentProfile, history }) => {
    const [formData, setFormData] = useState(
        {
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: ''
        });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    useEffect(() => {
        getCurrentProfile();
        console.log(profile)
        setFormData({
            company: loading || !profile.company ? '' : profile.company,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            status: loading || !profile.status ? '' : profile.status,
            skills: loading || !profile.skills ? '' : profile.skills,
            githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            instagram: loading || !profile.social ? '' : profile.social.instagram,
        });
    }, [loading, getCurrentProfile]);



    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true);
    }


    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh',
            color: 'white',
            backgroundColor: "grey"
        },
        containerRoot: {
            margin: '100px',
            backgroundColor: "grey",
            alignItems: 'center'

        },
        formBox: {
            marginTop: '20px',
            marginBottom: '20px'
        },

        formGrid: {

        },
        formPaper: {
            backgroundColor: "white",
            height: "100%",
            padding: '60px'


        },
        textField: {
            width: '30vw',
            margin: "0px",
            height: "5vh",
        },
        formGrid1: {
            margin: "10px",
        },
        formGrid2: {
            margin: "10px",
            marginTop: "70px",
        },
        buttonToggle: {
            margin: "10px",
            marginLeft: '20%'
        },
        Bsubmit: {
            marginLeft: "2%",
            backgroundColor: "green",
            marginRight: "7%",
            color: "white"
        },
        Bback: {
            marginRight: "7%",
            backgroundColor: "blue"
        },
        Bdelete: {
            backgroundColor: "red",
            color: "white"
        },
        links: {
            color: 'white',
            textDecoration: 'none'
        },
        textFieldSocial: {
            width: '26vw',
            margin: "0px",
            height: "5vh",
        },
        Icons: {
            paddingRight: "5%"
        }



    }));
    const classes = useStyles();

    const statuses = [
        {
            value: 'First Year',
            label: 'First Year',
        },
        {
            value: 'Second Year',
            label: 'Second Year',
        },
        {
            value: 'Third Year',
            label: 'Third Year',
        },
        {
            value: 'Fouth Year',
            label: 'Fouth Year',
        },
    ];

    return (
        <Fragment>
            <Grid container direction="column" className={classes.containerRoot}>
                <Grid item> <h1 className="large text-primary">
                    Edit Your Profile
      </h1>
                    <p className="lead">
                        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p></Grid>
                <Grid className={classes.formGrid} direction="column">
                    <form className={classes.form} onSubmit={e => onSubmit(e)}>
                        <Paper className={classes.formPaper}>
                            {/* <select name="status" value={status} onChange={e => onChange(e)}>
                                <option value="0">* Select Professional Status</option>
                                <option value="Developer">Developer</option>
                                <option value="Junior Developer">Junior Developer</option>
                                <option value="Senior Developer">Senior Developer</option>
                                <option value="Manager">Manager</option>
                                <option value="Student or Learning">Student or Learning</option>
                                <option value="Instructor">Instructor or Teacher</option>
                                <option value="Intern">Intern</option>
                                <option value="Other">Other</option>
                            </select>
                            <small className="form-text"
                            >Give us an idea of where you are at in your career</small
                            > */}
                            <Grid item className={classes.formGrid1}>
                                <TextField className={classes.textField}
                                    id="status"
                                    select
                                    name="status"
                                    helperText='Currently in..'
                                    value={status}
                                    onChange={e => onChange(e)}

                                >
                                    {statuses.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <Box direction="column" className={classes.formBox} elevation={3}>
                                    <TextField className={classes.textField} label='Company' placeholder="Company" name="company" value={company} onChange={e => onChange(e)}>
                                    </TextField>
                                    <p className="form-text"
                                    >Could be your own company or one you work for</p>
                                </Box>
                                <Box className={classes.formBox}>
                                    <TextField className={classes.textField} label='Website' placeholder="Website" name="website" value={website} onChange={e => onChange(e)} ></TextField>
                                    <p className="form-text">Could be your own or a company website</p>
                                </Box>
                                <Box className={classes.formBox}>
                                    <TextField className={classes.textField} label='city' type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} ></TextField>
                                    <p className="form-text"
                                    >City & state suggested (eg. Boston, MA)</p
                                    >
                                </Box>
                                <Box className={classes.formBox}>
                                    <TextField className={classes.textField} label='Skills' placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)} ></TextField>
                                    <pre className="form-text"
                                    >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</pre>
                                </Box>
                                <Box className={classes.formBox}>
                                    <TextField className={classes.textField} label='Github Username' placeholder="Github Username"

                                        placeholder="Github Username"
                                        name="githubusername" value={githubusername} onChange={e => onChange(e)} ></TextField>

                                    <p className="form-text">If you want your latest repos and a Github link, include your Github</p>
                                </Box>
                                <Box className={classes.formBox}>
                                    <TextField className={classes.textField} label="Multiline"
                                        multiline variant="outlined"
                                        rows={4} label="Bio" placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)} ></TextField>

                                </Box>
                            </Grid>
                            <Grid item className={classes.formGrid2}>
                                <div className="my-2">
                                    <Button color="primary" variant="outlined" onClick={() => toggleSocialInputs(!displaySocialInputs)} size="small" className={classes.buttonToggle}>
                                        <LanguageSharpIcon />Add Social Network Links
          </Button>

                                    <span>Optional</span>
                                </div>

                                {displaySocialInputs && <Fragment>

                                    <div className="form-group social-input">
                                        <TwitterIcon fontSize="large" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <FacebookIcon fontSize="large" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <YouTubeIcon fontSize="large" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <LinkedInIcon fontSize="large" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <InstagramIcon fontSize="large" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)} ></TextField>
                                    </div></Fragment>

                                }

                            </Grid>


                            <Button variant="outlined" type="submit" className={classes.Bsubmit}>Submit</Button>
                            {/* <input type="submit" className="btn btn-primary my-1" /> */}
                            <Button item variant="outlined" className={classes.Bback} > <Link className={classes.links} to="/dashboard">Go Back</Link></Button>

                            <Button variant="outlined" className={classes.Bdelete} onClick={() => deleteAccount()}>
                                <DeleteForeverIcon />  Delete Account
                        </Button>

                        </Paper>
                    </form>
                </Grid>
            </Grid>
        </Fragment >
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
});
export default connect(mapStateToProps, { deleteAccount, createProfile, getCurrentProfile })(withRouter(EditProfile));
