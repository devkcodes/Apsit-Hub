import React, { Fragment } from 'react'
import PropTypes from "prop-types";


import {AppBar,CssBaseline,Divider,Drawer,Hidden,IconButton,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography} from '@material-ui/core'



import InboxIcon from "@material-ui/icons/MoveToInbox";
import {MailIcon} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PeopleIcon from '@material-ui/icons/People';
import RateReviewIcon from '@material-ui/icons/RateReview';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SchoolIcon from '@material-ui/icons/School';
import {Link} from 'react-router-dom';
import { logout } from '../../actions/auth';
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux';
import {createMuiTheme } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core/styles';

const navFont = createMuiTheme({
  typography: {
    fontFamily: [
      'Share Tech', 'san-serif',
    ].join(','),
    
},});


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    ['@media (min-width:600px)']: {
      display:"none"     }
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor:"#2B7A78",
      height:"80px"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  links: {
    color: 'black',
    textDecoration: 'none'
  },
}));

function ResponsiveDrawer({ auth: { isAuthenticated, loading ,user}, logout }) {
//   const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
    let param = window.location.href;
  const Guestdrawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider  />
      <List>
               <Link  to={`/login`} className={classes.links}> <ListItem button >
            <ListItemIcon>
               <EditIcon />
            </ListItemIcon> 
            <ListItemText primary={"Sign In"} />
          </ListItem></Link>
        
        <Link  to={`/register`} className={classes.links}> <ListItem button >
            <ListItemIcon>
              <RateReviewIcon />
            </ListItemIcon> 
            <ListItemText primary={"Register"} />
          </ListItem></Link>

      </List>
      <Divider />


      <List>


          <Link  to={`/profiles`} className={classes.links}> <ListItem button >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon> 
            <ListItemText primary={"Students"} />
          </ListItem></Link>
         
         
          
          <a  href="https://www.apsit.edu.in/home" className={classes.links}> <ListItem button >
            <ListItemIcon>
            <SchoolIcon/>
            </ListItemIcon> 
            <ListItemText primary={"APSIT"} />
          </ListItem></a>
          <a  href="https://github.com/devkcodes" className={classes.links}> <ListItem button >
            <ListItemIcon>
               <ContactMailIcon />
            </ListItemIcon> 
            <ListItemText primary={"FeedBack"} />
          </ListItem></a>
          
       
      </List>
    </div>
  );






    const Authdrawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider  />
      <List>
        <Link  to={`/profiles`} className={classes.links}> <ListItem button >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon> 
            <ListItemText primary={"Students"} />
          </ListItem></Link>
        
        <Link  to={`/posts`} className={classes.links}> <ListItem button >
            <ListItemIcon>
               <RateReviewIcon />
            </ListItemIcon> 
            <ListItemText primary={"Posts"} />
          </ListItem></Link>
          {user&&
           <Link to={`/profile/${user._id}`}  className={classes.links}> <ListItem button >
            <ListItemIcon>
               <DashboardIcon />
            </ListItemIcon> 
            <ListItemText primary={"Dashboard"} />
          </ListItem></Link>
          }
         
       
      </List>
      <Divider />


      <List>
       <Link  to={`/edit-profile`} className={classes.links}> <ListItem button >
            <ListItemIcon>
               <EditIcon />
            </ListItemIcon> 
            <ListItemText primary={"Edit Profile"} />
          </ListItem></Link>
         
         <Link  to={`/`} onClick={logout}  className={classes.links}> <ListItem button >
            <ListItemIcon>
               <ExitToAppIcon /> 
            </ListItemIcon> 
            <ListItemText primary={"Logout"} />
          </ListItem></Link>
          
          <a  href="https://github.com/devkcodes" className={classes.links}> <ListItem button >
            <ListItemIcon>
               <ContactMailIcon />
            </ListItemIcon> 
            <ListItemText primary={"FeedBack"} />
          </ListItem></a>
       
      </List>
    </div>
  );

  return (
    
  <Fragment >
    <MuiThemeProvider theme={navFont}>
    

      {(!loading && !isAuthenticated &&!(param === 'http://localhost:3000/')) ?
          <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" style={{ backgroundColor:"#2B7A78",
      height:"83px",padding:"3%"}} className={classes.appBar}>
        <Toolbar>
        <Grid container direction="row" justify="space-between" alignItems="center" >
        <Grid item>
          <IconButton
            color="#2B7A78"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          </Grid>
          <Grid item>
            <Link to="/">
          <h5 noWrap>
            APSIT HUB
          </h5>
          </Link>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {Guestdrawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {Guestdrawer}
          </Drawer>
        </Hidden>
      </nav>
      </div>
      : isAuthenticated&&!loading&&
      <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" style={{ backgroundColor:"#2B7A78",
      height:"83px",padding:"3%"}} className={classes.appBar}>
        <Toolbar>
        <Grid container direction="row" justify="space-between" alignItems="center" >
        <Grid item>
          <IconButton
            color="#2B7A78"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          </Grid>
          <Grid item>
            <Link to="/posts">
          <Typography variant="h5" noWrap>
            APSIT HUB
          </Typography>
          </Link>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {Authdrawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {Authdrawer}
          </Drawer>
        </Hidden>
      </nav>
      </div>
      }
      
      </MuiThemeProvider>
          </Fragment>
   );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};


ResponsiveDrawer.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStatetoprops = state => ({ auth: state.auth });

export default connect(mapStatetoprops, { logout })(ResponsiveDrawer);



