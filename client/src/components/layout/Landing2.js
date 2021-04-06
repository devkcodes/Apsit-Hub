import React, { Fragment, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';
import './landing.css';


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
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grow from '@material-ui/core/Grow'




const useStyles = makeStyles((theme) => ({
    container: {
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
    gridContainer: {
        width: '100vw',
        height: '100vh',

    },
    gridItem: {
        width:'30vw',
        heigth:'1500px',
        // backgroundColor:'black',
        margin:"1vw",
        height: "50vh",
        marginTop:"120px",
        padding:"1%"
      
    },
    gridRoot: {

        backgroundImage: 'url(https://res.cloudinary.com/dsph4eptm/image/upload/v1615213580/Capture_islxj1.png)',

    },
    Paper1: {
        width:'70%',
        height:'100%',
        backgroundColor:'red',
        borderRadius: '10px',
     
    },


    Paper2: {
        width:'70%',
        height:'100%',
        backgroundColor:'pink',
        borderRadius: '10px',
    },
    Paper3: {
        width:'70%',
        height:'100%',
        backgroundColor:'blue',
        borderRadius: '10px',
    },
    typography: {
        allVariants: {
            color: "white"
        },
    },

}));





export const Landing2 = ({isAuthenticated }) => {
    const classes = useStyles();


    if (isAuthenticated) {
        return <Redirect to="/Posts" />
    }

    return (

        
            <Grow in={1}
            style={{ transformOrigin: '0 0100 0' }}
            {...(1 ? { timeout: 2000 } : {})}>
                <Grid container  justify="space-around"  alignItems="center" spacing={4} className={classes.gridContainer}>
                    <Grid container justify="flex-end" alignItems="center" className={classes.gridItem}>
                        <Paper elevation={5}  item className={classes.Paper1}>hi</Paper>
                    </Grid>
                    
                    <Grid item container justify="center" alignItems="center" className={classes.gridItem}>
                        <Paper elevation={5} item className={classes.Paper2}>hi</Paper>
                    </Grid>
                    
                    <Grid item container justify="flex-start" alignItems="center" className={classes.gridItem}>
                        <Paper elevation={5} item className={classes.Paper3}>hi</Paper>
                    </Grid>
                </Grid>
                </Grow>
       
    )
};

Landing2.propTypes = {
   
    isAuthenticated: PropTypes.bool
}



export default Landing2;