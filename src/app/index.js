import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MasterLayout from './layouts/MasterLayout/MasterLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';

ReactDOM.render(
    (
        <MasterLayout>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </BrowserRouter>
        </MasterLayout>
    ), document.getElementById('root'));

