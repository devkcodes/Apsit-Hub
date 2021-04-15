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
import g4glogo from '../../img/gfgicon.png'
import leetcodelogo from '../../img/leetcode-logo.png'
import codeforceslogo from '../../img/codeforces-logo.jpg'
import codecheflogo from '../../img/codechef-logo.png'
import kagglelogo from '../../img/kaggle.png'





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
                margin:10,
                marginRight:20,
                width:"400px",
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
           margin:"5%",
            height: "100%",
            padding: '2%',
            width: '60%',
            marginBottom: '20%',
            marginLeft:0,
            ['@media (max-width:600px)']: {
                margin:0,
                width:"100%",
                padding:'2%',
                marginBottom: '20%',
            },
            ['@media (max-width:1024px)']: {
                margin:0,
                width:"94%"
            }
    
        },
        textField: {
            width: '70%',
            margin: "5px",
            height: "5vh",
            ['@media (max-width:600px)']: {
                width:"200px",
                marginBottom: "15px",

            }
    
        },
        textFieldSelect:{
            width: '70%',
            margin: "5px",
            height: "5vh",
            marginBottom:"15px",
            ['@media (max-width:600px)']: {
                width:"200px"
            },
            ['@media (max-width:1024)']: {
            
            }
    
        },
        formGrid1: {
            margin: "0%",
            // marginLeft:"-20%",
            ['@media (max-width:600px)']: {
           
            },
            ['@media (max-width:1024)']: {
            
            }
    
       },
        formGrid2: {
            marginLeft: "-4%",
            marginTop: "70px",
            width: "80%",
            ['@media (max-width:600px)']: {
            
            },
            ['@media (max-width:1024)']: {
           
            }
    
        },
        buttonToggle: {
            marginTop: "10px",
            // marginLeft: '20%',
            color: 'black',
            border: '1px solid ',
            width: '100%',
            ['@media (max-width:600px)']: {
            
            },
            ['@media (max-width:1024)']: {
            
            }
    

        },
        Bsubmit: {
            marginLeft: "2%",
            backgroundColor: "green",
            marginRight: "7%",
            color: "white",
            '&:hover':{
                color:"black",
            },
        },
        Bback: {
            // marginRight: "7%",
            color: "black",
            width: "100%",
            '&:hover':{
                color:"black",
            },
        },
        Bdelete: {
            backgroundColor: "red",
            color: "white",
            '&:hover':{
                color:"black",
            },
        },
        finalGrid:{
            marginLeft:"-12%",
            margin:"5%"
        },
        urls: {
            marginLeft:"10%",
            marginTop:"5%",
        
            ['@media (max-width:600px)']: {
            width:"250px",
            marginLeft:"0"
            },

        },
        logo:{
            maxWidth:'23px',
            marginRight:'20px',
            textDecoration:'none',
            color:'black'
          },
          Icons:{
            marginRight:'20px',
          },

        textFieldSocial: {
            width: '26vw',
            margin: "0px",
            height: "5vh",
            ['@media (max-width:600px)']: {
                width:"180px"
                },
        },

        textFieldCoding: {
            width: '26vw',
            margin: "0px",
            height: "5vh",
            ['@media (max-width:600px)']: {
                width:"180px"
                },
        },
        

        Icons: {
            marginRight:'20px',
        },
       heading:{
        ['@media (max-width:600px)']: {
            margin:"10px",
            marginTop:0,
            justifyText:"center"
        },
          
       },
        // lead:{
        //     fontSize: "18px",
        //     dispay:'block'
        // }
formText:{
    marginTop:"10px",
    ['@media (max-width:600px)']: {
          fontSize:"10px",
          margin:"10px"
    },
    
    },
    formBox:{
        marginTop:"20px",
        ['@media (max-width:600px)']: {
            maxWidth:"200px"  
      },
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
        <MuiThemeProvider theme={editFont}>
        <Fragment>
            <Grid container  direction="column" justify="space-between"  alignItems="center" style={{backgroundColor:"#75C7C3"}} className={classes.containerRoot}>
            <Grid item className={classes.heading}>
                    <Typography><h1 variant="h4" align="center" > Edit Your Profile</h1></Typography>
                       
      
                    <Typography> 
                             Let's get some information to make your profile stand out
                     </Typography>
                      </Grid>
                      <Paper className={classes.formPaper}>
                    <form className={classes.form} onSubmit={e => onSubmit(e)}>
                        
                    <Grid
  container
  direction="column"
  justify="space-evenly"
  alignItems="stretch"
>
                            <Grid item className={classes.formGrid1}>
                                
                            <Box  className={classes.formBox}  elevation={10}>
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
                                <Typography className={classes.formText}
                                    >You're current Graduation Year</Typography>
                                </Box>

                                <Box direction="column" className={classes.formBox} elevation={3}>
                                    <TextField className={classes.textField} label='Company' placeholder="Company" name="company" value={company} onChange={e => onChange(e)}>
                                    </TextField>
                                    <Typography className={classes.formText}
                                    >Company you're intern at</Typography>
                                </Box>
                                <Box className={classes.formBox}>
                                    <TextField className={classes.textField} label='Website' placeholder="Website" name="website" value={website} onChange={e => onChange(e)} ></TextField>
                                    <Typography className={classes.formText}>Could be your own or a company website</Typography>
                                </Box>
                                <Box className={classes.formBox}>
                                    <TextField className={classes.textField} label='city' type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} ></TextField>
                                    <Typography className={classes.formText}
                                    >City & state suggested</Typography
                                    >
                                </Box>
                                <Box className={classes.formBox}>
                                    <TextField className={classes.textField} label='Skills' placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)} ></TextField>
                                    <Typography className={classes.formText}
                                    >Please use comma separated values</Typography>
                                </Box>
                                <Box className={classes.formBox}>
                                    <TextField className={classes.textField} label='Github Username' placeholder="Github Username"

                                        placeholder="Github Username"
                                        name="githubusername" value={githubusername} onChange={e => onChange(e)} ></TextField>

                                    <Typography className={classes.formText}>To display GIthub Repos</Typography>
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
                                   
                                

                                {displaySocialInputs &&<div className={classes.urls}>


                                    <div className="form-group social-input">
                                        <TwitterIcon fontSize="medium" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <FacebookIcon fontSize="medium" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <YouTubeIcon fontSize="medium" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <LinkedInIcon fontSize="medium" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                        <InstagramIcon fontSize="medium" className={classes.Icons} />
                                        <TextField className={classes.textFieldSocial} placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)} ></TextField>
                                    </div></div>

                                }



                                {displayCodingInputs && <div className={classes.urls}>


                                    <div className="form-group social-input">
                                    <img className={classes.logo} src={g4glogo} alt=""/>
                                        
                                        <TextField className={classes.textFieldCoding} placeholder="geeksforgeeks URL" name="geeksforgeeks" value={geeksforgeeks} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                    <img className={classes.logo} src={leetcodelogo} alt=""/>
                                        <TextField className={classes.textFieldCoding} placeholder="leetcode URL" name="leetcode" value={leetcode} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                    <img className={classes.logo} src={codeforceslogo} alt=""/>
                                        <TextField className={classes.textFieldCoding} placeholder="codeforces URL" name="codeforces" value={codeforces} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                    <img className={classes.logo} src={codecheflogo} alt=""/>
                                        <TextField className={classes.textFieldCoding} placeholder="codechef URL" name="codechef" value={codechef} onChange={e => onChange(e)} ></TextField>
                                    </div>

                                    <div className="form-group social-input">
                                    <img className={classes.logo} src={kagglelogo} alt=""/>
                                        <TextField className={classes.textFieldCoding} placeholder="kaggle URL" name="kaggle" value={kaggle} onChange={e => onChange(e)} ></TextField>
                                    </div></div>

                                }

                            </Grid>
                            </Grid>
<Grid  container
  direction="row"
  justify="space-evenly"
  alignItems="flex-end"  className={classes.finalGrid}>
<Grid item><Button variant="outlined" type="submit" className={classes.Bsubmit}>Save</Button>  </Grid>
                            {/* <input type="submit" className="btn btn-primary my-1" /> */}
                            <Grid item> <Button variant="outlined" className={classes.Bdelete} onClick={() => deleteAccount()}>
                                <DeleteForeverIcon />  Delete Account
                        </Button>  </Grid>
                        <Grid item> <Button variant="outlined" className={classes.bBack}><Link to="/dashboard"></Link>
                                Back
                        </Button>  </Grid>

                        </Grid>
                        
                    </form>
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
