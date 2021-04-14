import React from 'react'
import ProfileGithub from './ProfileGithub'

import {Grid} from '@material-ui/core'

function ProfileRight({profile}) {
  
  return (
    <Grid   item  justify="flex-start"> 
    
      <ProfileGithub username={profile.githubusername}/>
    </Grid>
  )
}

export default ProfileRight
