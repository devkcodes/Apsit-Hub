import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import '../../landing.css'

import { Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'




export const Landing = ({ isAuthenticated }) => {

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }


  return (
    <div>
      <Container maxWidth='lg'>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Paper />
          <Paper />
          <Paper />
        </Grid>

      </Container>
    </div>

  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
