import React, { Fragment } from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

//Geist UI
import {Card, Text, Divider,Code,Button,Avatar,Fieldset,Badge} from '@geist-ui/react' 
import { Globe,Smile  } from '@geist-ui/react-icons'


//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'


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
    }

}));

function ProfileLeft({ profile: {
    status,
    company,
    location,
    website,
    social,
    user,
    skills,
    bio
},auth:{user:{_id}}}) {

  const classes = useStyles();

  console.log(_id)
  const name = user.name;
  const avatar = user.avatar;
  const user_id = user._id;
  const skillarray = skills.toString().split(/[\s,]+/);

  return (
    <Grid item xs={12} md={4} >
      <Card  width="100%">
                        <Card.Content style={{display:'flex',justifyContent:'space-between'}}>
                          <span>Basic Profile</span>
                          <span>
                            {_id===user_id&&
                            <Button size="mini" shadow type="secondary"auto type="secondary" className={classes.overflowText}><Link to={`/edit-profile`}>Edit Profile</Link></Button>}
                          </span>
                        </Card.Content>
                        <Divider y={0} />
                        <Card.Content style={{display:'flex',justifyContent:'flext-start'}}>
                            <Avatar src={avatar} size="large" isSquare="true"/>
                            
                            <div className={classes.CardOneText}>
                            <span>
                            <Text b>{name}</Text>
                            </span>
                            <span>
                              {status}
                            </span>
                            </div>
                        </Card.Content>
                        <Divider y={0} />
                        <Card.Content className={classes.CardOneTextTwo}>
                            <span style={{display:'flex',alignItems:'flex-end'}}><Globe/><span >Location</span></span>
                            <span className={classes.overflowText}>{location}</span>
                        </Card.Content>
      </Card>

            <Card  width="100%" style={{marginTop:'2rem'}}>
                        <Card.Content style={{display:'flex',justifyContent:'space-between'}}>
                          <div className={classes.Bio}>
                            <span  style={{display:'flex',alignItems:'flex-end'}} ><Smile/><span>Bio</span></span>
                            <span className={classes.overflowText}>
                              <Text b>{bio}</Text>
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
      </Card>
      </Grid>
      
   
  )
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(ProfileLeft);
