//ui imports
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import Container from '@material-ui/core/Container';
// import { palette } from '@material-ui/system';
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from '@material-ui/core/TextField';
// import { sizing } from '@material-ui/system';

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
        backgroundImage: 'url(https://res.cloudinary.com/dsph4eptm/image/upload/v1615197642/photomania-24ef4102c2f9ea86ea75f3ecfa7c11bc_sfbwij.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {

        padding: '5em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#151117',
        margin: '70px',
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

    },
    gridRoot: {

        backgroundImage: 'url(https://res.cloudinary.com/dsph4eptm/image/upload/v1615213580/Capture_islxj1.png)',

    },
    typography: {
        allVariants: {
            color: "white"
        },
    },

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
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} className={classes.gridRoot} square>
                    <Paper elevation={3} className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon color='white' />
                        </Avatar>
                        <Typography component="h1" variant="h4" style={{ color: 'white' }}>
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
                                Sign In
            </Button>
                            <Grid container>
                                <Grid item xs>

                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" style={{ color: '#3F51B5' }}>
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