
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Landing2 from './components/layout/Landing2';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import Footer from './components/layout/Footer';


//Redux
import { Provider } from 'react-redux';
import store from './storee';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store} >
            <Router >
                <Fragment >
                    <Navbar />
                    <Route exact path="/" component={Landing2} />

                    <section className="container">

                        <Alert />
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
                </Fragment > </Router></Provider>
    )
};
export default App;