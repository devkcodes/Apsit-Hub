

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


// import Form from '@material-ui/core/Form';
import { Text, Divider,Fieldset,Badge,Tooltip } from '@geist-ui/react' 



//other
import React, { Fragment, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        color: 'white'
    },
    image: {
        backgroundImage: 'url(https://res.cloudinary.com/dsph4eptm/image/upload/c_scale,w_1564/v1617711570/Untitled_design_psiyef.png)', 
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {

        padding: '5em',
        display: 'flex',
        width:"35vw",
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#0F1319',
        margin: '70px',
        marginLeft: '33%',
        border: '1px solid #F1304D',
        boxShadow:"0px 0px 5px 5px #F1304D",
        // marginBottom:"1000px"
        height:"70vh"

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor:"#F1304D",
        color:"#0F1319"

    },
    gridRoot: {
boxShadow:"none",
        backgroundImage: 'url(https://res.cloudinary.com/dsph4eptm/image/upload/v1617973085/3_dudhhs.png)',
backgroundColor:"#D4B39D"
    },
    // typography: {
    //     allVariants: {
    //         color: "white"
    //     },
    // },
textfieldcolor:{


    
    color:"#F1304D"
}
}));


export const Login = ({ login, isAuthenticated }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({

        email: '',
        password: '',

    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onClick = async e => {
        e.preventDefault()
        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/posts" />
    }

    return (

        <Fragment>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
                <Grid   xs={12} contaner sm={8} md={12} component={Paper} elevation={6} className={classes.gridRoot} square>
                    <Paper elevation={3} item className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon color='white' />
                        </Avatar>
                     <Typography   component="h1" variant="h4" style={{ color: 'white' }}>
                            Sign in
          </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                style={{
                                    backgroundColor: "#171319",
                                    color: "white",
                                    // border: '5px solid black',
                                    // borderRadius: "10px"
                                }}
                                InputProps={{
                                    style: {
                                        color: "white"
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        width: '100%',
                                        color: 'white'
                                    }
                                }}
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                onChange={e => onChange(e)}
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                           InputProps={{
                            className: classes.multilineColor
                          }}
                                style={{
                                    backgroundColor: "#171319",
                                    color: "#primary",
                                    // border: '5px solid black',
                                    // borderRadius: "10px"
                                }}
                                
                                InputLabelProps={{
                                    style: {
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        width: '100%',
                                        color: 'white'
                                    }
                                }}
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                minLength="6"
                                value={password}
                                onChange={e => onChange(e)}
                                autoComplete="current-password"
                            />

                            <Button
                                onClick={e => onClick(e)}
                                type="submit"
                                fullWidth
                                value='login'
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                               
                            >
                             <Typography><Text b color="white"> Sign In</Text></Typography>
            </Button>
                            <Grid container>
                                <Grid item xs>

                                </Grid>
                                <Grid item>
                                    <Link to="/register" variant="body2" style={{ color: '#F1304D' }}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>

                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    )
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStatetoProps = state => ({ isAuthenticated: state.auth.isAuthenticated })


export default connect(mapStatetoProps, { login })(Login);