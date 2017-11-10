import React from 'react';
import styles from './login.scss';
import all from './allpages.scss';

export default class Login extends React.Component{
    render(){
        return(
            <div id="login" className={styles.login}>
                <div id="holder" className = {all.borderContainer}>
                    <form>
                        <p> Email </p>
                        <input placeholder="E-mail"/>
                        <p> Password </p>
                        <input placeholder="Password"/>
                    </form>
                </div>
            </div>
        )
    }
}