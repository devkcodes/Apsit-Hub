//mui imports
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


//others
import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import Navbar from '../layout/Navbar';
import PropTypes from 'prop-types'

//styles
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "5em",
        margin: '35em',
        backgroundColor: '#151117'

    },
    container: {
        backgroundImage: 'url(https://res.cloudinary.com/dsph4eptm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1615213211/vector-seamless-pattern-with-education-back-to-school-icons-doodle-student-dark-background-2BHRABY_dkq4s5.jpg)',
        height: "100vh"
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    gridRoot: {
        backgroundColor: "red",
    }
}));

//register function
export const Register = ({ setAlert, register, isAuthenticated }) => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onClick = async e => {
        e.preventDefault()
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        }
        else {
            register({ name, email, password });
        }
    };

    if (isAuthenticated) {
        return <Redirect to="/create-profile" />
    }





    return (

        <Fragment>
            <Container component="main" maxWidth="xl" className={classes.container}>
                <CssBaseline />

                <Paper elevation={3} className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ color: 'white' }}>
                        Sign up
        </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2} >
                            <Grid item xs={12} >
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
                                    onChange={e => onChange(e)}
                                    autoComplete="name"
                                    name="name"
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    value={name}
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12}>
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
                                    onChange={e => onChange(e)}
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={email}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                                    onChange={e => onChange(e)}
                                    variant="filled"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                                    onChange={e => onChange(e)}
                                    variant="filled"
                                    required
                                    fullWidth
                                    name="password2"
                                    label="Confirm sPassword"
                                    type="password"
                                    id="password"
                                    value={password2}
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>

                            </Grid>
                        </Grid>
                        <Button
                            onClick={e => onClick(e)}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            value='register'
                        >
                            Sign Up
          </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2" style={{ color: '#3F51B5' }}>
                                    Already have an account? Sign in
              </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>

                <Box mt={5}>

                </Box>
            </Container>
        </Fragment>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStatetoprops = state => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(
    mapStatetoprops, { setAlert, register }
)(Register);
