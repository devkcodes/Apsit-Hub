import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const styles = ({

  row: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  container: {
    width: 1170,
    margin: "auto"
  },
  buttonFontSize: {
    fontSize: "16px",
    color: "#a1a1a1"
  },

  AppBar: {
    //height:400,
    //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
    backgroundColor: "rgb(22, 27, 34)",
    backgroundSize: "cover",
    marginBottom: "-20px"
  },
  mainLogo: {
    color: "#a1a1a1",

    justifyContent: "left",
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

export const NavbarComponent = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles();
  const authLinks = (
    <ul>

      <li><a onClick={logout} href="http://localhost:3000">
        <i className="fas fa-sign-out-alt"></i>{' '}
        <span className="hide-sm">Logout</span></a></li>

      <li><Link to="/profiles"><i className="mdi mdi-account-check
"></i><span className="hide-sm">Developers</span></Link></li>
      <li><Link to="/posts"><i className="fas fa-user"></i><span className="hide-sm">Posts</span></Link></li>
      <li><Link to="/dashboard"><i className="fas fa-user"></i><span className="hide-sm">Dashboard</span></Link></li>

      <li><a onClick={logout} href="http://localhost:3000">
        <i className="fas fa-sign-out-alt"></i>{' '}
        <span className="hide-sm">Logout</span></a></li>

    </ul>
  );

  const guestLinks = (
    <ul>
      <li><Link to="/profiles">Developers</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );





  return (
    <Fragment>
      {!loading && isAuthenticated && authLinks

        //      <AppBar position="static" color="default" className={classes.AppBar}>
        //   <Grid item sm={12} xs={12} className={classes.container}>
        //     <Toolbar>
        //       <Grid className={classes.grow}>
        //         <Button className={[classes.mainLogo]}>
        //           <h2>ApsitHub</h2>
        //         </Button>
        //       </Grid>
        //       <Button color="inherit" className={classes.buttonFontSize}>Feed</Button>
        //       <Button color="inherit" className={classes.buttonFontSize}>Students</Button>
        //       <Button color="inherit" className={classes.buttonFontSize}>Dashboad</Button>
        //       <Button color="inherit" className={classes.buttonFontSize}>Logout</Button>

        //     </Toolbar>
        //   </Grid>
        // </AppBar>

      }

    </Fragment>

  )
};
NavbarComponent.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStatetoprops = state => ({ auth: state.auth });

export default connect(mapStatetoprops, { logout })(NavbarComponent);