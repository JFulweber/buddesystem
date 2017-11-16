import React from 'react';
import styles from './login.scss';
import BorderContainer from '../components/UI/BorderContainer.jsx';

export default class Login extends React.Component{
    render(){
        return(
            <div id="login" className={styles.login}>
                <BorderContainer>
                    <form>
                        <p> Email </p>
                        <input placeholder="E-mail"/>
                        <p> Password </p>
                        <input placeholder="Password"/>
                    </form>
                </BorderContainer>
            </div>
        )
    }
}