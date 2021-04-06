import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar } from "@material-ui/core"
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import "../../App.css";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// import 'bootstrap/dist/css/bootstrap.min.css';

const footFont = createMuiTheme({
  typography: {
    fontFamily: [
      'Share Tech', 'san-serif',
    ].join(','),
    fontSize:"1px"
},});

const styles = ({
 
  row: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    padding: '0px',
  },
  container: {
    width: 1170,
    margin: "auto"
  },
  buttonFontSize: {
    fontSize: "16px",

  },
  links: {
    color: 'white',
    textDecoration: 'none'
  },
  AppBar: {
    //height:400,
    //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
    backgroundColor: "#2D3548",
    backgroundSize: "cover",
    padding: "0px",
    marginBottom: "5px",
    textDecoration: 'none',
    

  },
  mainLogo: {
    color: "#a1a1a1",

    '&:hover': {
      background: "transparent"
    }
  },

  avatar: {
    height: "100%",
    borderRadius: 0,


  },

  loginButton: {
    background: "#e91e63",
    color: "#fff",
    borderRadius: "25px",
    padding: "0px 25px",

    '&:hover': {
      background: 'blue',
      boxShadow: "0px 2px 10px #888888"
    }
  },
  footer: {
      colour:"white",
      backgroundColor:"pink",
      padding:"30px",
      margin:"0px",
      marginBottom:"0px"
  },
  gridItem: {},



});
const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();


  return (
    <Fragment>
      <MuiThemeProvider theme={footFont}>
     
 
    <MDBFooter  className={classes.footer}>
      <MDBContainer fluid >
        <Grid container>
          <Grid item md="6">
            <h5 className="title">ApsitHub</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </Grid >
          <Grid item md="3">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Grid >
          <Grid item md="3">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Grid >
        </Grid>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>

</MuiThemeProvider>
    </Fragment>

  )
};


export default Footer;