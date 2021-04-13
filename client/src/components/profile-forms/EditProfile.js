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
import MenuItem from '@material-ui/core/MenuItem'
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';




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
            instagram: '',
            kaggle: '',
            codeforces: '',
            codechef: '',
            geeksforgeeks: '',
            leetcode: ''
        });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);
    const [displayCodingInputs, toggleCodingInputs] = useState(false);

    useEffect(() => {
        getCurrentProfile();
        console.log(profile)
        setFormData({
            gender : loading ||  profile.gender,
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
            geeksforgeeks: loading || !profile.coding ? '' : profile.coding.geeksforgeeks,
            codeforces: loading || !profile.coding ? '' : profile.coding.codeforces,
            codechef: loading || !profile.coding ? '' : profile.coding.codechef,
            leetcode: loading || !profile.coding ? '' : profile.coding.leetcode,
            kaggle: loading || !profile.coding ? '' : profile.coding.kaggle,
        });
    }, [loading, getCurrentProfile]);



    const {
        gender,
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
        instagram,
        kaggle,
        codeforces,
        codechef,
        geeksforgeeks,
        leetcode
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
    
        e.preventDefault();
        createProfile(formData, history, true);
    }

    const editFont = createMuiTheme({
        palette: {
          primary: {
            main:"#fff",
          }},
        typography: {
          fontFamily: [
            'Share Tech', 'san-serif',
          ].join(','),
          
          Fontcolor:"#F1304D"
      }});
      
    const useStyles = makeStyles((theme) => ({
    
        containerRoot: {
            margin: '100px',
            ['@media (max-width:600px)']: {
                margin:0,
                backgroundColor:"# ",

                    }
            
        },
        form: {
            marginLeft:"15%",
            marginRight:"15%",
            width: '100%', 
            ['@media (max-width:600px)']: {
            }
    
        },

        formPaper: {
           margin:"0%",
            height: "100%",
            padding: '2%',
            width: '60%',
            marginBottom: '10%',
            marginLeft:0,
            ['@media (max-width:600px)']: {
                margin:0,
                width:"94%"
            }
    
        },
        textField: {
            width: '70%',
            margin: "5px",
            height: "5vh",
            ['@media (max-width:600px)']: {
            }
    
        },
        textFieldSelect:{
            width: '70%',
            margin: "5px",
            height: "5vh",
            marginBottom:"15px",
            ['@media (max-width:600px)']: {
            }
    
        },
        formGrid1: {
            margin: "0%",
            // marginLeft:"-20%",
            ['@media (max-width:600px)']: {
            }
    
       },
        formGrid2: {
            marginLeft: "-4%",
            marginTop: "70px",
            width: "80%",
            ['@media (max-width:600px)']: {
            }
    
        },
        buttonToggle: {
            marginTop: "10px",
            // marginLeft: '20%',
            color: 'black',
            border: '1px solid ',
            width: '100%',
            ['@media (max-width:600px)']: {
            }
    

        },
        Bsubmit: {
            marginLeft: "2%",
            backgroundColor: "green",
            marginRight: "7%",
            color: "white"
        },
        Bback: {
            marginRight: "7%",
            color: "black",
            width: "100%"
        },
        Bdelete: {
            backgroundColor: "red",
            color: "white"
        },
        finalGrid:{
            marginLeft:"-12%",
            margin:"5%"
        },
        // links: {
        //     color: 'white',
        //     textDecoration: 'none',
        // },
        textFieldSocial: {
            width: '26vw',
            margin: "0px",
            height: "5vh",
        },
        // Icons: {
        //     paddingRight: "5%"
        // },
        // h1:{
        //     fontSize: "60px",
        //     backgroundColor:"17242A",
        //     float:"left"
        // },
        // lead:{
        //     fontSize: "18px",
        //     dispay:'block'
        // }




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
        <MuiThemeProvider theme={editFont}>
        <Fragment>
            <Grid container  direction="column" justify="space-between"  alignItems="center" style={{backgroundColor:"#2B7A77"}} className={classes.containerRoot}>
            <Grid item>
                    <Typography><h1 variant="h4" className={classes.h1}> Edit Your Profile</h1></Typography>
                       
      
                    <Typography> 
                             Let's get some information to make your profile stand out
                     </Typography>
                      </Grid>
                      <Paper className={classes.formPaper}>
                    <FormControl className={classes.form} onSubmit={e => onSubmit(e)}>
                        
                    <Grid
  container
  direction="column"
  justify="space-evenly"
  alignItems="stretch"
>
                            <Grid item className={classes.formGrid1}>
                                
                            <Box direction="column" className={classes.formBox} elevation={3}>
                                <TextField className={classes.textFieldSelect}
                                    id="status"
                                    select
                                    name="status"
                                    label='Currently in..'
                                    value={status}
                                    onChange={e => onChange(e)}

                                >
                                    {statuses.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <p className="form-text"
                                    >You're current Graduation Year</p>
                                </Box>

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
            HTML,CSS)</pre>
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
                                
                                    <Grid  container direction="row" justify="space-around" alignItems="center">
                                   <Grid item> <Button color="primary" variant="outlined" onClick={() => toggleSocialInputs(!displaySocialInputs)} size="small" className={classes.buttonToggle}>
                                        <LanguageSharpIcon />Add Social Network Links
          </Button></Grid>

          <Grid item>      <Button color="primary" variant="outlined" onClick={() => toggleCodingInputs(!displayCodingInputs)} size="small" className={classes.buttonToggle}>
                                        <LanguageSharpIcon />Add Coding Profile Links
          </Button></Grid>
          </Grid>
                                   
                                

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



                                {displayCodingInputs && <Fragment>

                                    <div className="form-group social-input">
                                        <TwitterIcon fontSize="large" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="geeksforgeeks URL" name="geeksforgeeks" value={geeksforgeeks} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <FacebookIcon fontSize="large" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="leetcode URL" name="leetcode" value={leetcode} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <YouTubeIcon fontSize="large" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="codeforces URL" name="codeforces" value={codeforces} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <LinkedInIcon fontSize="large" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="codechef URL" name="codechef" value={codechef} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <InstagramIcon fontSize="large" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="kaggle URL" name="kaggle" value={kaggle} onChange={e => onChange(e)} ></TextField>
                                    </div></Fragment>

                                }

                            </Grid>
                            </Grid>
<Grid  container direction="row" justify="center"  className={classes.finalGrid}>
<Grid item><Button variant="outlined" type="submit" className={classes.Bsubmit}>Save</Button>  </Grid>
                            {/* <input type="submit" className="btn btn-primary my-1" /> */}
                            <Grid item> <Button variant="outlined" className={classes.Bdelete} onClick={() => deleteAccount()}>
                                <DeleteForeverIcon />  Delete Account
                        </Button>  </Grid>
                            <Grid item> <Button item variant="outlined" className={classes.Bback} > <Link  to="/dashboard">Go Back</Link></Button>  </Grid>

                        </Grid>
                        
                    </FormControl>
                    </Paper>
                </Grid>
            
        </Fragment >
        </MuiThemeProvider>
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
