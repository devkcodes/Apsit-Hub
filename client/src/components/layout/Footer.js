import React, { Fragment } from 'react'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar } from "@material-ui/core"
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import "../../App.css";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Box } from '@material-ui/core'
import temp from './../../img/temp.PNG';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import { url } from 'gravatar';

// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// import 'bootstrap/dist/css/bootstrap.min.css';

const footFont = createMuiTheme({
  palette: {
    primary: {
      main:"#fff",
    }},
  typography: {
    fontFamily: [
      'Share Tech', 'san-serif',
    ].join(','),
    fontSize:"1px",
    Fontcolor:"#F1304D"
}});


const styles = ({
 
  
  links: {
    color: 'white',
    textDecoration: 'none'
  },

  footer: {
      colour:"white",
      backgroundColor:"#20242B",
      padding:"30px",
      margin:"0px",
      marginBottom:"0px",
      // backgroundImage:"url(https://res.cloudinary.com/dsph4eptm/image/upload/v1617971458/heyy_clkr5c.jpg)",
  },
  footerLinks:{
      marginTop:"5vh"
  },
  mission:{
      margin:"10px",
  },
  box:{
      backgroundColor: "#20252B",
      width:"70%"
  },
  subLinks:{
      
  }



});
const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();


  return (
    <Fragment>
      <MuiThemeProvider theme={footFont}>
      
 
    <Grid  >
      <div fluid >
        <Grid container className={classes.footer} >
          <Grid item md="3">
            
            <img src={"https://res.cloudinary.com/dsph4eptm/image/upload/c_scale,w_240/v1617975621/ApSIt_Hub_n2dvbf.jpg"}></img>
          </Grid >
          <Grid item md="3" className={classes.footerLinks}>
          <Box  className={classes.box}float="left"><Typography color="primary" style={{ fontSize: 25 }} className="title">Our Mission</Typography>
          <Typography color="primary" variant="body1"  align="justify" className={classes.mission}>Contrary to popular belief, Lorem Ipsum is not simply rand
          om text. It has roots in a piece of classical Latin literature fr
          om 45 BC, making it over 2000 years old. Richard McClintock</Typography>
          </Box>
           
          </Grid >
          <Grid item md="2" className={classes.footerLinks}>
          <Box  className={classes.box} color="primary"> <Typography color="primary" style={{ fontSize: 25 }} className="title">Apsit  Hub</Typography>
          <List dense="true">
              <ListItem><Typography color="primary" variant="caption" className={classes.subLink}><Link href="#" color="primary" > License</Link></Typography></ListItem>
              <ListItem><Typography color="primary" variant="caption" className={classes.subLink}><Link href="#" color="primary" > FeedBack</Link></Typography></ListItem>
              <ListItem><Typography color="primary" variant="caption" className={classes.subLink}><Link href="#" color="primary" > License</Link></Typography></ListItem>
              <ListItem><Typography color="primary" variant="caption" className={classes.subLink}><Link href="#" color="primary" > License</Link></Typography></ListItem>
          </List>
          </Box>
           
          </Grid >
         
          <Grid item md="2" className={classes.footerLinks}>
          <Box  className={classes.box}> <Typography color="primary" color="primary" style={{ fontSize: 25 }} className="title">About APSIT</Typography>
          <List dense="true" >
              <ListItem><Typography color="primary" variant="caption" className={classes.subLink}><Link href="https://www.apsit.edu.in/home" color="primary" > About Us</Link></Typography></ListItem>
              <ListItem><Typography color="primary" variant="caption" className={classes.subLink}><Link href="https://www.apsit.edu.in/admission-notification-2020-21" color="primary" > Admissions</Link></Typography></ListItem>
              <ListItem><Typography color="primary" variant="caption" className={classes.subLink}><Link href="https://www.apsit.edu.in/our-recruiters" color="primary" > Recruiters</Link></Typography></ListItem>
              <ListItem><Typography color="primary" variant="caption" className={classes.subLink}><Link href="https://www.apsit.edu.in/reach-us" color="primary" > Reach Us</Link></Typography></ListItem>
          </List>
          </Box>
          </Grid ><Divider/>
          <Grid item md="2" className={classes.footerLinks}>
          <Box  className={classes.box}> <Typography color="primary" style={{ fontSize: 25 }} className="title">Follow Apsit</Typography>
          <List dense="false">
              <ListItem><Typography color="primary" variant="caption" className={classes.subLink}><ListItemIcon><Link href="https://www.instagram.com/ojus_apsit"><InstagramIcon color="primary" style={{ fontSize: 30 }}/></Link></ListItemIcon></Typography></ListItem>
              <ListItem><Typography color="primary" variant="caption" className={classes.subLink}><ListItemIcon><Link href="http://ojus.eventsapsit.org/#"><TwitterIcon color="primary" style={{ fontSize: 30 }}/></Link></ListItemIcon></Typography></ListItem>
              <ListItem><Typography color="primary" variant="caption" className={classes.subLink}><ListItemIcon><Link href="https://www.facebook.com/ojusapsit/"><FacebookIcon color="primary" style={{ fontSize: 30 }}/></Link></ListItemIcon></Typography></ListItem>
              
          </List>
          </Box>
           
          </Grid >
        </Grid>
      </div>
     
    </Grid>

</MuiThemeProvider>
    </Fragment>

  )
};


export default Footer;