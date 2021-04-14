
//ui imports
import {Avatar,Button,CssBaseline,Box,Grid,Paper,FormControl,TextField,MenuItem,InputLabel,makeStyles,Select} from '@material-ui/core'



import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import g4glogo from '../../img/gfgicon.png'
import leetcodelogo from '../../img/leetcode-logo.png'
import codeforceslogo from '../../img/codeforces-logo.jpg'
import codecheflogo from '../../img/codechef-logo.png'
import kagglelogo from '../../img/kaggle.png'


//normal 
import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {  MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'



const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState(
        {
            gender:'',
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
        createProfile(formData, history);
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
           margin:"5%",
            height: "100%",
            padding: '2%',
            width: '60%',
            marginBottom: '20%',
            marginLeft:0,
            ['@media (max-width:600px)']: {
                margin:0,
                width:"94%"
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
            }
    
        },
        textFieldSocial:{
            width: '70%',
            margin: "5px",
            height: "5vh",
            marginBottom:"15px",
            ['@media (max-width:600px)']: {
            
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
        urls: {
            marginLeft:"10%",
            marginTop:"5%"
        },
        textFieldSocial: {
            width: '26vw',
            margin: "0px",
            height: "5vh",
        },
        logo:{
            maxWidth:'25px',
            marginRight:'20px',
            textDecoration:'none',
            color:'black'
          },
          Icons:{
            marginRight:'20px',
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
    const genderOpt =[
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
    ]


    return (
    
        <MuiThemeProvider theme={editFont}>
            <Fragment>
                <Grid container direction="column" justify="space-between"  alignItems="center" style={{backgroundColor:"#2B7A77"}} className={classes.containerRoot}>
                    <Grid item> 
                    <Typography><h1 variant="h4" className={classes.h1}> Create Your Profile</h1></Typography>
                       
      
                       <Typography> 
                                Let's get some information to make your profile stand out
                        </Typography></Grid>
                        <Paper className={classes.formPaper}>
                        <FormControl className={classes.form} onSubmit={e => onSubmit(e)}>
                        <Grid
  container
  direction="column"
  justify="space-evenly"
  alignItems="stretch"
>
                    
                                <Grid item className={classes.formGrid1} >



                                <Box direction="column" className={classes.formBox} elevation={3}><FormControl  style={{width:"71%",}}>
                                <InputLabel  className={classes.textFieldSocial} shrink id="demo-simple-select-placeholder-label-label">
                                    Gender
                                </InputLabel>

                                <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
          value={gender}
          onChange={e => onChange(e)}
          displayEmpty
          name="gender"
          className={classes.selectEmpty}
        >
          <MenuItem name="gender" value={gender}>
            <em>None</em>
          </MenuItem>
          <MenuItem value='male'>Male</MenuItem>
          <MenuItem value='female'>Female</MenuItem>
          <MenuItem value='others'>Others</MenuItem>

         
        </Select>
       
        
      </FormControl>
</Box>




      <Box direction="column" className={classes.formBox} elevation={3}>
                                    <TextField className={classes.textField} style={{marginTop:"20px"}}
                                        id="status"
                                        select
                                        name="status"
                                        // helperText='Currently in..'
                                        value={status}
                                        label = "Currently in..."
                                        onChange={e => onChange(e)}

                                    >
                                        {statuses.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.value}
                                            </MenuItem>
                                        ))}
                                    </TextField></Box>

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
                                <Grid  container direction="row" justify="space-around" alignItems="center">
                                <Grid item>
                                        <Button color="primary" variant="outlined" onClick={() => toggleSocialInputs(!displaySocialInputs)} size="small" className={classes.buttonToggle}>
                                            <LanguageSharpIcon />Add Social Network Links
          </Button></Grid>

          <Grid item> <Button color="primary" variant="outlined" onClick={() => toggleCodingInputs(!displayCodingInputs)} size="small" className={classes.buttonToggle}>
                                            <LanguageSharpIcon />Add Coding Profile Links
          </Button></Grid>

                                        
                                    </Grid>

                                    {displaySocialInputs && <div className={classes.urls}>

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
                                            <TextField className={classes.textFieldSocial} placeholder="geeksforgeeks URL" name="geeksforgeeks" value={geeksforgeeks} onChange={e => onChange(e)} ></TextField>
                                        </div>

                                        <div className="form-group social-input">
                                        <img className={classes.logo} src={leetcodelogo} alt=""/>
                                            <TextField className={classes.textFieldSocial} placeholder="leetcode URL" name="leetcode" value={leetcode} onChange={e => onChange(e)} ></TextField>
                                        </div>

                                        <div className="form-group social-input">
                                        <img className={classes.logo} src={codeforceslogo} alt=""/>
                                            <TextField className={classes.textFieldSocial} placeholder="codeforces URL" name="codeforces" value={codeforces} onChange={e => onChange(e)} ></TextField>
                                        </div>

                                        <div className="form-group social-input">
                                        <img className={classes.logo} src={codecheflogo} alt=""/>
                                            <TextField className={classes.textFieldSocial} placeholder="codechef URL" name="codechef" value={codechef} onChange={e => onChange(e)} ></TextField>
                                        </div>

                                        <div className="form-group social-input">
                                        <img className={classes.logo} src={kagglelogo} alt=""/>
                                            <TextField className={classes.textFieldSocial} placeholder="kaggle URL" name="kaggle" value={kaggle} onChange={e => onChange(e)} ></TextField>
                                        </div></div>

                                    }

                                </Grid>
</Grid>
<Grid  container direction="row" justify="center"  className={classes.finalGrid}>
<Grid item><Button variant="outlined" type="submit" className={classes.Bsubmit}>Save</Button>  </Grid>
                            {/* <input type="submit" className="btn btn-primary my-1" /> */}
                            
                            <Grid item> <Button item variant="outlined" className={classes.Bback} > <Link  to="/dashboard">Go Back</Link></Button>  </Grid>


                                <Button onSubmit={e =>onSubmit(e)}variant="outlined" type="submit" className={classes.Bsubmit}>Submit</Button>
                                {/* <input type="submit" className="btn btn-primary my-1" /> */}
                                <Button item variant="outlined" className={classes.Bback} > <Link className={classes.links} to="/posts">Go Back</Link></Button>


                        </Grid>
                                </FormControl>

                            </Paper>
                    </Grid>
                
            </Fragment >
        </MuiThemeProvider>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}

export default connect(null, { createProfile })(withRouter(CreateProfile));
