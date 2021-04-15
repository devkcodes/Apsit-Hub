import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import './github.css';

//Geist UI
// import {Card,Divider} from '@geist-ui/react'
import {Card,Text, Divider,Button,Avatar,Fieldset,Badge,Tooltip } from '@geist-ui/react' 
import { Globe,Smile,Code,Facebook,Twitter,Linkedin,Instagram,Youtube,MessageCircle   } from '@geist-ui/react-icons'
import useMediaQuery from "@geist-ui/react/dist/use-media-query"


//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import {  MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card'





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
        color: 'white',
        marginTop:'2em'
    },
    containerRoot: {
        marginTop:'10em',
				width:'90vw'

    },
    gitcard:{
        marginTop:'2rem',
        wordWrap:'break-word',
        border: '1px solid #17242A',
        ['@media (max-width:600px)']:{
           
            
        }
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

        alignItems:'center',
        ['@media (max-width:600px)']:{
            display:'inline-block',
        }
    },
    h4repo:{
        paddingBottom:'20px'
    },
    cardFooter:{
        minHeight:'10px'
    },
    cardmain:{
        width:"100%",
        display:'flex',
        backgroundColor:"#2B7A78",
        justifyContent:'space-between',
         flexDirection:'column',
         borderRadius:"5px",
         ['@media (max-width:1000px)']: {
           
                },

                ['@media (max-width:600px)']: {
                   
            // overflow:"hidden"
                }
    },
    card:{
        ['@media (max-width:600px)']: {
            backgroundColor:"#17252A",
            width:'50px'
     // overflow:"hidden"
         }
    },
    gitmain:{
        ['@media (max-width:600px)']:{
            marginTop:'50px',
        }
    },
    cardrepo:{
        width:"500px",
        ['@media (max-width:600px)']:{
            
            width:"400px"
        }
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
        <Grid container sm={12} className={classes.gitmain}>
            <Card style={{border: '1px solid #000'}} className={classes.card}>
                <Card.Content className={classes.cardmain} >
                <div className={classes.h4repo}>
                    <span><Text size={20} style={{color: '#17242A'}} b>Github Repositories</Text></span>
                </div>
                
                <Divider y={0} />

            <div className={classes.cardcontainer} >
                
            
            {
                repos === null ? <Spinner /> : (
                    repos.map(repo => (
                        <Grid xs={4} md = {12} item key={repo.id} className={classes.gitcard}>
                        <Card  width="500px">
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
                </Grid>
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
