
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResponsiveDrawer from './components/layout/Navbar2';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';

import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import Footer from './components/layout/Footer.js';
import './components/layout/Alert.css';

import { makeStyles } from '@material-ui/core/styles'

//Redux
import { Provider } from 'react-redux';
import store from './storee';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';



const useStyles = makeStyles((theme) => ({
    frag:{marginTop:80},
    navbar:{
        // ['@media (min-width:601px)']: {
                display:'none'
        // }
    },
    drawer:{
        // ['@media (max-width:600px)']: {
                 display: "none"
        // }
    },
    
    }));

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
//     App.use(bodyParser.json());
const classes = useStyles();
// App.use(bodyParser.urlencoded({ extended: true }));
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider  store={store} >
            <Router >
                <Fragment  >
                {/* <Landing  exact path="/"/> */}
                <div className="navbar">
                    <Navbar /> 
                    </div>
                <div className="drawer">
                    <ResponsiveDrawer />
                    </div>

                    <Fragment className={classes.frag}>
                    <Alert />
                    <Route exact path="/" component={Landing} />

                    <section className="container">

                        
                        <Switch>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/profiles" component={Profiles} />
                            <Route exact path="/profile/:id" component={Profile} />

                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                            <Route exact path="/profile/:id" component={Profile} />
                            <PrivateRoute exact path="/posts" component={Posts} />
                            <PrivateRoute exact path="/posts/:id" component={Post} />


                        </Switch>
                    </section>
                    <Footer/>
</Fragment>
                </Fragment > </Router></Provider>
    )
};
export default App;