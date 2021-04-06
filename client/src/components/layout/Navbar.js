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
    textDecoration: 'none'

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

});
const useStyles = makeStyles(styles);

export const NavbarComponent = ({ auth: { isAuthenticated, loading ,user}, logout }) => {
  const classes = useStyles();


  return (
    <Fragment>
      {!loading && isAuthenticated && user &&

        <AppBar position="fixed" color="#2D3548" className={classes.AppBar}>
          <Grid item sm={12} xs={12} className={classes.container}>
            <Toolbar>
              <Grid className={classes.grow}>
                <Button className={[classes.mainLogo]}>
                  <h2>ApsitHub</h2>
                </Button>
              </Grid>
              <Button color="inherit" className={classes.buttonFontSize}><Link  to={`/profile/${user._id}`} className={classes.links}>Dashboard</Link></Button>
              <Button color="inherit" component={Link} className={classes.buttonFontSize}><Link to="/profiles" className={classes.links}>Students</Link></Button>
              <Button color="inherit" className={classes.buttonFontSize}><Link to="/posts" className={classes.links}>Posts</Link></Button>
              <Button color="inherit" className={classes.buttonFontSize} >
                <a className={classes.links} onClick={logout} href="http://localhost:3000/login">

                  Logout</a>
              </Button>

            </Toolbar>
          </Grid>
        </AppBar>

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