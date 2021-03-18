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

export const NavbarComponent = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles();
  // const authLinks = (
  //     <ul>



  //       <li><Link to="/profiles"><i className="mdi mdi-account-check
  // "></i><span className="hide-sm">Developers</span></Link></li>
  //       <li><Link to="/posts"><i className="fas fa-user"></i><span className="hide-sm">Posts</span></Link></li>
  //       <li><Link to="/dashboard"><i className="fas fa-user"></i><span className="hide-sm">Dashboard</span></Link></li>

  //       <li><a onClick={logout} href="http://localhost:3000">
  //         <i className="fas fa-sign-out-alt"></i>{' '}
  //         <span className="hide-sm">Logout</span></a></li>

  //     </ul>
  // );

  const guestLinks = (<Fragment>
    {/* <ul>
      <li><Link to="/profiles">Developers</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul> */}
    <Button color="inherit" className={classes.buttonFontSize}><li><Link to="/profiles" >Developers</Link></li></Button>
    <Button color="inherit" className={classes.buttonFontSize}> <Link className={classes.links} to="/register">Register</Link>
    </Button>
    <Button color="inherit" className={classes.buttonFontSize}>      <li><Link to="/login">Login</Link></li>
    </Button>
  </Fragment >
  );





  return (
    <Fragment>
      {!loading && isAuthenticated &&

        <AppBar position="fixed" color="#2D3548" className={classes.AppBar}>
          <Grid item sm={12} xs={12} className={classes.container}>
            <Toolbar>
              <Grid className={classes.grow}>
                <Button className={[classes.mainLogo]}>
                  <h2>ApsitHub</h2>
                </Button>
              </Grid>
              <Button color="inherit" className={classes.buttonFontSize}><Link to="/dashboard" className={classes.links}>Dashboard</Link></Button>
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