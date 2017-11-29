import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MasterLayout from './layouts/MasterLayout/MasterLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Profile from './pages/profile.jsx';
import EditPage from './pages/editprofile.jsx';
import Page404 from './pages/404Page.jsx';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    link: new HttpLink({ uri: "localhost:3000" }),
    cache: new InMemoryCache()
});

ReactDOM.render(
    (
        <ApolloProvider client = {client}>
            <MasterLayout>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/profile/:name/" component={Profile} />
                        <Route exact path="/editprofile" component={EditPage} />
                        <Route exact path="/404" component={Page404} />
                        <Route component={Page404} />
                    </Switch>
                </BrowserRouter>
            </MasterLayout>
        </ApolloProvider>
    ), document.getElementById('root'));

