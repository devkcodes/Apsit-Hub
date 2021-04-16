import React, { useState,Fragment ,} from 'react'
import { Link,  } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Drawer,Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar, Divider } from "@material-ui/core"
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import "../../App.css";
import {createMuiTheme } from '@material-ui/core/styles'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



const navFont = createMuiTheme({
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
    fontSize: "20px",
    marginRight:"7px",
    marginLeft:"7px",
    ['@media (max-width:600px)']: {
display: "none"      }
  },
  links: {
    color: 'white',
    textDecoration: 'none'
  },
  AppBar: {
    //height:400,
    //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
    backgroundColor: "#2B7A78",
    backgroundSize: "cover",
    padding: "0px",
    marginBottom: "",
    textDecoration: 'none',
    
  ['@media (max-width:600px)']: {
    
    }
    

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
  }
  ,
  footer:{
    fontFamily: [
        'Share Tech', 'san-serif',
      ].join(','),
  }

});
const useStyles = makeStyles(styles);

export const Footer = ({ auth: { isAuthenticated, loading ,user}, logout }) => {
  const classes = useStyles();
  
  

  return (
    
    
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
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
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>


  )
};
Footer.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStatetoprops = state => ({ auth: state.auth });

export default connect(mapStatetoprops, { logout })(Footer);






