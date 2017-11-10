import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MasterLayout from './layouts/MasterLayout/MasterLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/login.jsx';


console.log(Route);


ReactDOM.render(
    (
        <MasterLayout>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        </MasterLayout>
    ), document.getElementById('root'));

