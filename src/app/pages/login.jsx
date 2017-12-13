import React from 'react';
import styles from './login.scss';
import BorderContainer from '../components/UI/BorderContainer.jsx';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import cookie from 'react-cookies';

export default class Login extends React.Component {

    componentWillMount() {

       /*  this.state = {
            loggedIn: cookies.get('loggedIn') || false
        }; */
    }


    constructor(props) {
        super(props);
        this.state = {};
        this.state.email = '';
        this.state.pass = '';
        this.state.onLogin = null;

        this.emailChange = this.emailChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailChange(event) {
        this.setState({ email: event.target.value })
    }

    passChange(event) {
        this.setState({ pass: event.target.value });
        //console.log(this.state.pass.replace(/.*/g,'*'))
    }

    handleSubmit(event) {
        console.log(this.state)
        event.preventDefault();
        var query = gql`query($email:String!,$pass:String!){
            validateLogin(email: $email, password: $pass)
        }`
        this.setState({
            onLogin: graphql(query, {
                options: {
                    variables: {
                        email: this.state.email,
                        pass: this.state.pass
                    }
                }
            })(OnLogin)
        })
    }

    render() {
        if (this.state.onLogin) return <this.state.onLogin />;
        return (
            <div id="login" className={styles.login}>
                <BorderContainer>
                    <form onSubmit={this.handleSubmit}>
                        <p> Email </p>
                        <input placeholder="E-mail" id="email" value={this.state.email} onChange={this.emailChange} />
                        <p> Password </p>
                        <input placeholder="Password" id="pass" value={this.state.pass} onChange={this.passChange} />
                        <input type="submit" value="Login" />
                    </form>
                </BorderContainer>
            </div>
        )
    }
}

class OnLogin extends React.Component {

    render() {
        if (this.props.data.validateLogin == true) {
            cookie.save('loggedIn',true);
            return (
                <BorderContainer>
                    <p> Login Successful </p>
                </BorderContainer>
            )
        }
        else {
            cookie.save('loggedIn',false);
            return (
                <BorderContainer>
                    <p> Login Unsuccessful (wrong username/pass) </p>
                </BorderContainer>
            )
        }
    }
}