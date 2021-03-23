import React from 'react'
import ProfileGithub from './ProfileGithub'

import {Grid} from '@material-ui/core'

function ProfileRight({profile}) {
  
  return (
    <Grid item> 
      <ProfileGithub username={profile.githubusername}/>
    </Grid>
  )
}

export default ProfileRight
