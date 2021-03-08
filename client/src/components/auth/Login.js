//ui imports
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import { palette } from '@material-ui/system';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { sizing } from '@material-ui/system';

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

const styles = {
    gridRoot: {
        height: '100vh',


    },
    inputRoot: {
        padding: '10px',
        backgroundColor: 'green'
    },
    cardRoot: {
        display: "inline-block",
        float: "right",
        width: '33.33',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'pink',
        margin: '10rem'
    },
    grid1Root: {
        backgroundColor: 'red',
        ['@media (max-width:600px)']: {

            backgroundColor: 'green'
        }


    },
    grid2Root: {
        backgroundColor: 'blue',

    }
};
const useStyles = makeStyles(styles);
export const Login = ({ login, isAuthenticated }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({

        email: '',
        password: '',

    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault()
        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/posts" />
    }
    return (
        <Fragment>


            <Grid container className={classes.gridRoot} direction="row"
                justify="center"
                alignItems="stretch">


                <Grid item className={classes.grid1Root} xs={6}>





                </Grid>
                <Grid item className={classes.grid2Root} xs={6}>

                    <Card className={classes.cardRoot}>
                        <h1 className="large text-primary">Sign In</h1>
                        <p className="lead"><i className="fas fa-user"></i> Sign into your account</p>
                        <form className="form" onSubmit={e => onSubmit(e)}>

                            <form className={classes.root} noValidate autoComplete="off">
                                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                            </form>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    minLength="6"
                                    value={password} onChange={e => onChange(e)} required
                                />
                            </div>

                            <input type="submit" className={classes.inputRoot} value="Login" />
                        </form>
                        <p className="my-1">
                            Don't have an account? <Link to="/register">Sign Up</Link>
                        </p>
                    </Card>
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