import React from 'react';
import styles from './login.scss';
import BorderContainer from '../components/UI/BorderContainer.jsx';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:'blank@blank.com',
            pass:'qwert123adminadminadmin'
        };

        this.emailChange = this.emailChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailChange(event){
        console.log(this.state);
        this.setState({email:event.target.value})
    }

    passChange(event){
        console.log(this.state)
        this.setState({pass:event.target.value});
        //console.log(this.state.pass.replace(/.*/g,'*'))
    }

    submitButton(event){
        console.log(this.state);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
        var query = gql`query{
            validateLogin(email: $email, password: $pass)
        }`
        const resp = graphql(query, {
            options:{
                variables: {
                    email: this.state.email,
                    password: this.state.pass 
                }
            }
        })(this);
        console.log(this.props.data);
    }

    

    render(){
        return(
            <div id="login" className={styles.login}>
                <BorderContainer>
                    <form onSubmit = {this.handleSubmit}>
                        <p> Email </p>
                        <input placeholder="E-mail" id="email" value={this.state.email} onChange={this.emailChange}/>
                        <p> Password </p>
                        <input placeholder="Password" id="pass" value={this.state.pass} onChange={this.passChange}/>
                        <input type="submit" value="Login"/>
                    </form>
                </BorderContainer>
            </div>
        )
    }
}

class OnLogin extends React.Component{
    render(){
        if(this.props.data.validateLogin==true){
            return(
                <p> Login Successful </p>
            )
        }
        else{
            console.log(this.props.data);
            return <p> Login Unsuccessful (wrong username/pass) </p>
        }
    }
}