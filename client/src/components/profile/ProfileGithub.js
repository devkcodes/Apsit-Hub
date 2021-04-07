import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import Spinner from '../layout/Spinner';

//Geist UI
import {Card,Divider} from '@geist-ui/react'

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
        marginTop:'-1rem',
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'72.5vh',
        overflowY:'scroll',
        alignItems:'center'
    },
    h4repo:{
        paddingBottom:'20px'
    },
    cardFooter:{
        minHeight:'10px'
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
        <div style={{width:'100%'}}>
            <Card>
                <Card.Content style={{display:'flex',justifyContent:'space-between', flexDirection:'column'}}>
                <div className={classes.h4repo}>
                    <span>Github Repos</span>
                </div>
                
                <Divider y={0} />

            <div className={classes.cardcontainer} >
                
            
            {
                repos === null ? <Spinner /> : (
                    repos.map(repo => (
                        <Grid xs={12} md = {12} item key={repo.id} className={classes.gitcard}>
                        <Card style={{padding:'1rem'}}type="dark"  width="500px" >
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
        </div >
    )
}

ProfileGithub.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({ repos: state.profile.repos });
export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
