import React from 'react';
import styles from './login.scss';
import BorderContainer from '../components/UI/BorderContainer.jsx';

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.email = '';
        this.state.pass = '';

        this.emailChange = this.emailChange.bind(this);
        this.passChange = this.passChange.bind(this);
    }

    emailChange(event){
        console.log("event!");
        console.log(event)
        this.setState({email:event.target.value})
    }

    passChange(event){
        this.setState({pass:event.target.value});
        //console.log(this.state.pass.replace(/.*/g,'*'))
    }

    handleSubmit(){
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