
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



//normal 
import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
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
        createProfile(formData, history);
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
        //     <Fragment>
        //         <h1 className="large text-primary">
        //             Create Your Profile
        //   </h1>
        //         <p className="lead">
        //             <i className="fas fa-user"></i> 
        //   </p>
        //         <small>* = required field</small>
        //         <form className="form" onSubmit={e => onSubmit(e)}>
        //             <div className="form-group">
        //                 <select name="status" value={status} onChange={e => onChange(e)}>
        //                     <option value="0">* Select Professional Status</option>
        //                     <option value="Developer">Developer</option>
        //                     <option value="Junior Developer">Junior Developer</option>
        //                     <option value="Senior Developer">Senior Developer</option>
        //                     <option value="Manager">Manager</option>
        //                     <option value="Student or Learning">Student or Learning</option>
        //                     <option value="Instructor">Instructor or Teacher</option>
        //                     <option value="Intern">Intern</option>
        //                     <option value="Other">Other</option>
        //                 </select>
        //                 <small className="form-text"
        //                 >Give us an idea of where you are at in your career</small
        //                 >
        //             </div>
        //             <div className="form-group">
        //                 <input type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
        //                 <small className="form-text"
        //                 >Could be your own company or one you work for</small
        //                 >
        //             </div>
        //             <div className="form-group">
        //                 <input type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)} />
        //                 <small className="form-text"
        //                 >Could be your own or a company website</small
        //                 >
        //             </div>
        //             <div className="form-group">
        //                 <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
        //                 <small className="form-text"
        //                 >City & state suggested (eg. Boston, MA)</small
        //                 >
        //             </div>
        //             <div className="form-group">
        //                 <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)} />
        //                 <small className="form-text"
        //                 >Please use comma separated values (eg.
        //         HTML,CSS,JavaScript,PHP)</small
        //                 >
        //             </div>
        //             <div className="form-group">
        //                 <input
        //                     type="text"
        //                     placeholder="Github Username"
        //                     name="githubusername" value={githubusername} onChange={e => onChange(e)} />

        //                 <small className="form-text"
        //                 >If you want your latest repos and a Github link, include your
        //         username</small
        //                 >
        //             </div>
        //             <div className="form-group">
        //                 <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)} ></textarea>
        //                 <small className="form-text">Tell us a little about yourself</small>
        //             </div>

        //             <div className="my-2">
        //                 <button type="button" onClick={() => toggleSocialInputs(!displaySocialInputs)} className="btn btn-light">
        //                     Add Social Network Links
        //       </button>
        //                 <span>Optional</span>
        //             </div>

        //             {displaySocialInputs && <Fragment>

        //                 <div className="form-group social-input">
        //                     <i className="fab fa-twitter fa-2x"></i>
        //                     <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)} />
        //                 </div>

        //                 <div className="form-group social-input">
        //                     <i className="fab fa-facebook fa-2x"></i>
        //                     <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)} />
        //                 </div>

        //                 <div className="form-group social-input">
        //                     <i className="fab fa-youtube fa-2x"></i>
        //                     <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)} />
        //                 </div>

        //                 <div className="form-group social-input">
        //                     <i className="fab fa-linkedin fa-2x"></i>
        //                     <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)} />
        //                 </div>

        //                 <div className="form-group social-input">
        //                     <i className="fab fa-instagram fa-2x"></i>
        //                     <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)} />
        //                 </div>

        //             </Fragment>}


        //             <input type="submit" className="btn btn-primary my-1" />
        //             <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
        //         </form>
        //     </Fragment>
        <Fragment>
            <Fragment>
                <Grid container direction="column" className={classes.containerRoot}>
                    <Grid item> <h1 className="large text-primary">
                        Create Your Profile
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



                            </Paper>
                        </form>
                    </Grid>
                </Grid>
            </Fragment >
        </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}

export default connect(null, { createProfile })(withRouter(CreateProfile));
