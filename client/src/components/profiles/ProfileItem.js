
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


const useStyles = makeStyles((theme) => ({
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
    }


}));

const Profileitem = ({
    profile: {
        user: { _id, name, avatar },
        status,
        company,
        location,
        skills
    }
}) => {
    const classes = useStyles();


    return (
        // <div className="profile bg-light" >
        //     <img src={avatar} alt=" " className="round-img" />
        //     <div>
        //         <h2>{name}</h2>
        //         <p>{status} {company && <span> at {company}</span>}</p>
        //         <p className="my-1" >{location && <span> at {location}</span>}</p>
        //         <Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>


        // </div>

        // </div >
        <Fragment>
            {/* <Grid item className={classes.gridImage} justify="space-around"> */}
            <Paper className={classes.paper} elevation={3}>
                {/* <Grid direction="row" container className={classes.grid}> */}

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

                {/* </Grid> */}
                {/* <Grid item className={classes.gridDesc}>
                        <h2>{status} Student</h2>
                        <p> {company && <span> at {company}</span>}</p>
                        <p className="my-1" >{location && <span> at {location}</span>}</p>
                        <Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>
                    </Grid> */}

            </Paper>
            {/* </Grid> */}
        </Fragment >
    )
};

Profileitem.propTypes = {

}

export default Profileitem

{// import React from 'react';
    // import { Link } from 'react-router-dom';
    // import PropTypes from 'prop-types';

    // const Profileitem = ({
    //     profile: {
    //         user: { _id, name, avatar },
    //         status,
    //         company,
    //         location,
    //         skills
    //     }
    // }) => {
    //     return <div className="profile bg-light" >
    //         <img src={avatar} alt=" " className="round-img" />
    //         <div>
    //             <h2>{name}</h2>
    //             <p>{status} {company && <span> at {company}</span>}</p>
    //             <p className="my-1" >{location && <span> at {location}</span>}</p>
    //             <Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>


    //         </div>
    //         <ul>
    //             {skills.slice(0, 4).map((skill, index) => (
    //                 <li key={index} className='text-primary'>
    //                     <i className="fas fa-check"></i>{skill}
    //                 </li>
    //             ))}
    //         </ul>

    //     </div >
    // };

    // Profileitem.propTypes = {

    // }

    // export default Profileitem
    // 
}