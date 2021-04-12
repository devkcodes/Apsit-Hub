import React, { Fragment } from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

//Geist UI
import {Card, Text, Divider,Avatar,Fieldset,Badge,Tooltip } from '@geist-ui/react' 
import { Globe,Smile,Code,Facebook,Twitter,Linkedin,Instagram,Youtube,MessageCircle   } from '@geist-ui/react-icons'


//Material UI
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

//icons
import g4glogo from '../../img/gfgicon.png'
import leetcodelogo from '../../img/leetcode-logo.png'
import codeforceslogo from '../../img/codeforces-logo.jpg'
import codecheflogo from '../../img/codechef-logo.png'
import kagglelogo from '../../img/kaggle.png'


const light = createMuiTheme({
  palette: {
    primary: {
      main:"#fff",
    }},
  typography: {
    fontFamily: [
      'Share Tech', 'san-serif',
    ].join(','),
    fontSize:"1px",
    Fontcolor:"white"
}});

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        color: 'white'
    },
    containerRoot: {
        marginTop:'10em',
				display:'flex'

    },
    CardOneText:{
      display:'flex',
      flexDirection:'column',
      marginTop:'0.5rem',
      marginLeft:'1rem',
      lineHeight:'1.5rem'
    },
    CardOneTextTwo:{
      display:'flex',
      justifyContent:'space-between'
    }
    ,overflowText:{
      marginRight:'3rem'
    },
    Bio:{
      display:'flex',
      justifyContent:'space-between',
      width:'30rem'
    },
    logo:{
      maxWidth:'25px',
      marginRight:'20px',
      textDecoration:'none',
      color:'black'
    },
    spanBio:{
      margin:'10px',
      marginRight:'50px',
    },
    name:{
      marginBottom:"20px",
    }

}));

function ProfileLeft({ profile: {
    status,
    avatar,
    company,
    location,
    website,
    social,
    coding,
    user,
    skills,
    bio
},auth:{user:{_id}}}) {

  const classes = useStyles();


  const name = user.name;
  const user_id = user._id;
  const skillarray = skills.toString().split(/[\s,]+/);
console.log(coding)
  return (
    <MuiThemeProvider theme={light}>
       <Typography>
    <Grid item  >
      <Card  style={{width:"100%",border:"4px solid #62BCE6",color:"white"}}>
                        <Card.Content style={{display:'flex',justifyContent:'space-between',backgroundColor:'#20242B',width:'92.5%'}}>
                          <span>Basic Profile</span>
                          <span>
                            {_id===user_id&&
                            <span><Button  style={{color:"white",backgroundColor:"F1304D"}} className={classes.overflowText}><Link to={`/edit-profile`}>Edit Profile</Link></Button></span>}
                          </span>
                        </Card.Content>
                        <Divider y={0} />
                        <Card.Content style={{display:'flex',justifyContent:'flext-start'}}>
                            <Avatar src={avatar} size="large" isSquare="true"/>
                            
                            <div className={classes.CardOneText}>
                            <span>
                            <Typography className={classes.name} variant="h1" >{name}</Typography>
                            </span>
                            <span>
                              {status}
                            </span>
                            </div>
                        </Card.Content>
                        <Divider y={0} />
                        <Card.Content className={classes.CardOneTextTwo}>
                            <span style={{display:'flex',alignItems:'flex-end'}}><Globe/><span > <Typography>Location </Typography></span></span>
                            <Typography><span className={classes.overflowText}>{location}</span> </Typography>
                        </Card.Content>
      </Card>

            <Card  width="100%" style={{width:"100%",border:"4px solid #62BCE6",marginTop:'2rem'}}>
                        <Card.Content style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                          <div className={classes.Bio}>
                            <span  style={{display:'flex',alignItems:'flex-end',flexDirection:'column'}} ><Text b fontWeight="fontWeightBold" justify="" className={classes.spanBio}>Bio</Text></span>
                            <span className={classes.overflowText}>
                              <Typography   align="justify">{bio}</Typography>
                            </span>
                          </div>
                        </Card.Content>
                        <Divider y={0} />
                        <Card.Content style={{display:'flex',justifyContent:'flext-start'}}>

                            <div>
                            <span>
                            <Text b>Skills : </Text>
                            <span>{skillarray.map(x=> x!==""&&<Badge type="secondary" style={{margin:'0.1em'}}>{x}</Badge>)}</span>
                            </span>
                            </div>
                        </Card.Content>
                        
      </Card >

      <Card style={{width:"100%",border:"4px solid #62BCE6",marginTop:'2rem'}} >
        <Card.Content className={classes.CardOneTextTwo} >
                              <span style={{display:'flex',alignItems:'flex-end'}}><Code/><span ><Text b>Coding Profiles</Text></span></span>
                            <span className={classes.overflowText}>
                              {coding && coding.codechef && (
                                // <Tooltip text={'codechef'}>
                                <span>
                                <a href={coding.codechef} target="_blank" rel="noopener noreferrer">
					                        <img className={classes.logo} src={codecheflogo} alt=""/>
                                </a>
                                </span>
                              // </Tooltip>
				                      )}
                              {coding && coding.codeforces && (
                                <Tooltip text={'codeforces'}>
					                    <a href={coding.codeforces} target="_blank" rel="noopener noreferrer">
					                        <img className={classes.logo} src={codeforceslogo} alt=""/>
                                </a>
                              </Tooltip>
				                      )}
                              {coding && coding.leetcode && (
                                <Tooltip text={'leetcode'}>
					                    <a href={coding.leetcode} target="_blank" rel="noopener noreferrer">
					                        <img className={classes.logo} src={leetcodelogo} alt=""/>
                                </a>
                              </Tooltip>
				                      )}
                              {coding && coding.geeksforgeeks && (
                                <Tooltip text={'geeksforgeeks'}>
					                    <a href={coding.geeksforgeeks} target="_blank" rel="noopener noreferrer">
					                        <img className={classes.logo} src={g4glogo} alt=""/>
                                </a>
                              </Tooltip>
				                      )}
                              {coding && coding.kaggle && (
                                <Tooltip text={'Kaggle'}>
					                    <a href={coding.kaggle} target="_blank" rel="noopener noreferrer">
					                        <img className={classes.logo} src={kagglelogo} alt=""/>
                                </a>
                              </Tooltip>
				                      )}

                            </span>
        </Card.Content>
        <Divider y={0} />
        <Card.Content className={classes.CardOneTextTwo} >
                              <span style={{display:'flex',alignItems:'flex-end'}}><MessageCircle />  <span ><Text b>    Social Profiles</Text></span></span>
                            <span className={classes.overflowText}>
                              {social && social.linkedin && (
                                <Tooltip text={'linkedin'}>
                              <a className={classes.logo} href={social.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin/>
                              </a>
					                    
                              </Tooltip>
				                      )}
                              {social && social.instagram && (
                                <Tooltip text={'Instagram'}>
					                    <a className={classes.logo} href={social.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram/>
                              </a>
                              </Tooltip>
				                      )}
                              {social && social.facebook && (
                                <Tooltip text={'facebook'}>
					                    <a className={classes.logo} href={social.facebook} target="_blank" rel="noopener noreferrer">
                                <Facebook/>
                              </a>
                              </Tooltip>
				                      )}
                              {social && social.twitter && (
                                <Tooltip text={'twitter'}>
					                    <a className={classes.logo} href={social.twitter} target="_blank" rel="noopener noreferrer">
                                <Twitter/>
                              </a>
                              </Tooltip>
				                      )}
                              {social && social.youtube && (
                                <Tooltip text={'youtube'}>
                                <a className={classes.logo} href={social.youtube} target="_blank" rel="noopener noreferrer">
                                <Youtube/>
                              </a>
                              </Tooltip>
				                      )}

                            </span>
        </Card.Content>

        
      </Card>




      </Grid>
      </Typography>
      </MuiThemeProvider>
   
  )
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(ProfileLeft);
