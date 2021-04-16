import React, { useState,Fragment ,} from 'react'
import { Link,  } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Drawer,Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar, Divider } from "@material-ui/core"
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import "../../App.css";
import {createMuiTheme } from '@material-ui/core/styles'



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
    color: "#17252A",

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

});
const useStyles = makeStyles(styles);

export const NavbarComponent = ({ auth: { isAuthenticated, loading ,user}, logout }) => {
  const classes = useStyles();
  
  let param = window.location.href;

  return (
    
    <Fragment>
      <MuiThemeProvider theme={navFont}>
        {(!loading && !isAuthenticated &&!(param === 'http://localhost:3000/')) ? <AppBar position="fixed" color="#2D3548" className={classes.AppBar}>
          
            <Toolbar >
              <Grid className={classes.grow}>
                <Button container className={classes.mainLogo}>
                  <h2>ApsitHub</h2>
                </Button>
              </Grid>
              <Grid item>
              
              {/* <Button color="inherit" component={Link} className={classes.buttonFontSize}><Link to="/profiles" className={classes.links}>Students</Link></Button> */}
              <Button color="inherit" component={Link} className={classes.buttonFontSize}><Link to="/login" className={classes.links}>Sign In</Link></Button>
              <Button color="inherit" component={Link} className={classes.buttonFontSize}><Link to="/register" className={classes.links}>Register</Link></Button>
              <Button color="inherit" component={Link} className={classes.buttonFontSize}><Link to="/profiles" className={classes.links}>Students</Link></Button>
              <Button color="inherit" className={classes.buttonFontSize}><a href="https://www.apsit.edu.in/home" target="_blank" className={classes.links}>APSIT</a></Button>
              
              <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        // open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        
      </Drawer>
              </Grid>
            </Toolbar>
          <Divider/>
        </AppBar> :  isAuthenticated&&!loading&& <AppBar position="fixed" color="#2D3548" className={classes.AppBar}>
          
            <Toolbar >
              <Grid className={classes.grow}>
                <Button container className={[classes.mainLogo]}>
                  <h2>ApsitHub</h2>
                </Button>
              </Grid>
              <Grid item>
              
              {user &&
              <Button color="inherit" className={classes.buttonFontSize}><Link  to={`/profile/${user._id}`} className={classes.links}>Dashboard</Link></Button> }
              <Button color="inherit" component={Link} className={classes.buttonFontSize}><Link to="/profiles" className={classes.links}>Students</Link></Button>
              <Button color="inherit" className={classes.buttonFontSize}><Link to="/posts" className={classes.links}>Posts</Link></Button>
              <Button color="inherit" className={classes.buttonFontSize} >
                <a className={classes.links} onClick={logout} href="http://localhost:3000/login">
              
                  Logout</a>
              </Button>
              <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        // open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        
      </Drawer>
              </Grid>
            </Toolbar>
          <Divider/>
        </AppBar> }
        
      


</MuiThemeProvider>
      
    </Fragment>

  )
};
NavbarComponent.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStatetoprops = state => ({ auth: state.auth });

export default connect(mapStatetoprops, { logout })(NavbarComponent);








        