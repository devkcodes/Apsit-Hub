
//ui imports
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Paper from '@material-ui/core/Paper';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem'
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GridListTile from '@material-ui/core/GridListTile'

//normal 
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//Geist
import {Fieldset,Badge} from '@geist-ui/react'


const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        color: 'white',
        backgroundColor: "grey"
    },
    paper: {
        width: '20%',
        height: '20%',
        margin: "50px",
        padding: "20px"
    },
    gridImage: {

        backgroundColor: "green",
        width: "20%"
    },
    img: {
        height: "70%",
        width: "70%",
        borderRadius: "50%"
    },
    profileCard:{
        padding:'1em',
        
       
    },
    fieldset:{
        color:'black',
        border:"1px solid pink"
    },
    NameAndAvatar:{
        display:'flex',
        justifyContent:'flex-start',
    },
    StatusAndSkills:{
        display:'flex',flexDirection:'column',
        fontWeight:'900'
    },
    links:{
       color:'black',
       fontWeight:'900' 
    }


}));

const Profileitem = ({
    profile: {
        
        avatar,
        status,
        user,
        company,
        location,
        skills
    }
}) => {

    console.log(user)
    const name = user.name;
    const _id = user._id
    const classes = useStyles();
    var array = skills.toString().split(/[\s,]+/);



    return (

        <Grid item sm={6} lg={3} xs={12}  className ={classes.profileCard}>
            <Fieldset hoverable='true' style={{color:"black"}}>
                <div className={classes.NameAndAvatar}>
                    <Avatar src={avatar} size="medium" />
                <Fieldset.Title style={{padding:'15px',marginTop:'-0.5em',}}>{name}</Fieldset.Title>
                </div>
                
                <Fieldset.Subtitle className={classes.StatusAndSkills}>
                    
                        <span>{status}</span>
                        <span>Skills:{array.map(x=> x!==""&&<Badge type="secondary" style={{margin:'0.1em'}}>{x}</Badge>)}</span>
                
                </Fieldset.Subtitle>
                
                <Fieldset.Footer style={{backgroundColor:"#75C7C3",color:"white"}}>
                    <Fieldset.Footer.Actions>
                    <Button style={{backgroundColor:"#75C7C3",color:"white"}} auto size="mini"><Link className={classes.links} to={`/profile/${_id}`}> View</Link></Button>
                    </Fieldset.Footer.Actions>
                </Fieldset.Footer>
            </Fieldset>
        
            {/* <Paper className={classes.paper} elevation={3}>

                <img src={avatar} className={classes.img} />
                <h2>{name}</h2>
                <h2>{status} Student</h2>
                <ul>
                    {skills.slice(0, 4).map((skill, index) => (
                        <li key={index} className='text-primary'>
                            <i className="fas fa-check"></i>{skill}
                        </li>
                    ))}
                </ul>
                <Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>


            </Paper> */}
    
        </Grid >
    )
};

Profileitem.propTypes = {

}

export default Profileitem

