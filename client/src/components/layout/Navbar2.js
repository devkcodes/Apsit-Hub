import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PeopleIcon from '@material-ui/icons/People';
import RateReviewIcon from '@material-ui/icons/RateReview';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {Link} from 'react-router-dom';
import { logout } from '../../actions/auth';
import Grid from '@material-ui/core/Grid'



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

function ResponsiveDrawer({ 
    // auth: {user}
 }) {
//   const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider  />
     
     
      <List>
       <Link  to={`profiles`} className={classes.links}> <ListItem button >
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
          
          <Link  to="#" className={classes.links}> <ListItem button >
            <ListItemIcon>
               <DashboardIcon />
            </ListItemIcon> 
            <ListItemText primary={"Dashboard"} />
          </ListItem></Link>
       
      </List>
      <Divider />


      <List>
       <Link  to={`/edit-profile`} className={classes.links}> <ListItem button >
            <ListItemIcon>
               <EditIcon />
            </ListItemIcon> 
            <ListItemText primary={"Edit Profile"} />
          </ListItem></Link>
         
         <Link  to={`#`} className={classes.links}> <ListItem button >
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
          <Typography variant="h5" noWrap>
            APSIT HUB
          </Typography>
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
            {drawer}
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
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};



export default ResponsiveDrawer;