import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import Spinner from '../layout/Spinner';

//Geist UI
// import {Card,Divider} from '@geist-ui/react'
import {Card, Text, Divider,Button,Avatar,Fieldset,Badge,Tooltip } from '@geist-ui/react' 
import { Globe,Smile,Code,Facebook,Twitter,Linkedin,Instagram,Youtube,MessageCircle   } from '@geist-ui/react-icons'


//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import {  MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';





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
				width:'90vw'

    },
    gitcard:{
        marginTop:'2rem',
        wordWrap:'break-word'
    },
    list:{
        marginTop:'10px',
        width:'90%',
        listStyle:'none',
        display:'flex',
        justifyContent:'space-between',
        alignContent:'center'
    },
    cardcontainer:{
        marginTop:'1rem',
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'69vh',
        overflowY:'scroll',
        overflowX:'hidden',
        // border:"5px solid #F1304D",

        alignItems:'center'
    },
    h4repo:{
        paddingBottom:'20px'
    },
    cardFooter:{
        minHeight:'10px'
    },
    cardmain:{
        maxWidth:"100%",
        display:'flex',
        border:"5px solid #F1304D",
        backgroundColor:"#20242B",
        justifyContent:'space-between',
         flexDirection:'column',
         borderRadius:"5px",
    }

}));


const ProfileGithub = ({ username, getGithubRepos, repos }) => {
    	const classes = useStyles();
    useEffect(() => {
        console.log(username);
        getGithubRepos(username);
    },
        [getGithubRepos]

    );


    return (
        <MuiThemeProvider theme={light}>
            <Typography>
        
            <Card style={{border: '1px solid #000'}}>
                <Card.Content className={classes.cardmain} >
                <div className={classes.h4repo}>
                    <span><Text size={20} style={{color: '#EBE0D0'}} b>Github Repositories</Text></span>
                </div>
                
                <Divider y={0} />

            <div className={classes.cardcontainer} >
                
            
            {
                repos === null ? <Spinner /> : (
                    repos.map(repo => (
                        <Grid xs={12} md = {12} item key={repo.id} className={classes.gitcard}>
                        <Card style={{padding:'1rem'}}type="dark"  width="500px" margin="0">
    <h4>{repo.name}</h4>
    {repo.description?<p>{repo.description}</p>:<p>No description</p> }
    

    <Card.Footer style={{minHeight:'10px'}} className={classes.cardFooter}>
        <ul className={classes.list}>
								<li >
									<i class="fa fa-star-o" aria-hidden="true"></i>{" "}
									{repo.stargazers_count}
								</li>
								<li >
									<i class="fa fa-eye" aria-hidden="true"></i>{" "}
									{repo.watchers_count}
								</li>
								<li >
									<i class="fa fa-code-fork" aria-hidden="true"></i>{" "}
									{repo.forks_count}
								</li>
							</ul>
    </Card.Footer>
    </Card>
    </Grid>

                        )
                    )

                )}
                </div> 
                </Card.Content>
                </Card>
        
        </Typography>
        </MuiThemeProvider>
    )
}

ProfileGithub.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({ repos: state.profile.repos });
export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
