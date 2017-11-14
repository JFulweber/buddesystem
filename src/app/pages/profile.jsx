import React from 'react';
import styles from './profile.scss';
import astyles from './allpages.scss';

export default class Profile extends React.Component{
    render(){

        console.log("hello!");

        const { match, location, history } = this.props

        console.log(location);
        console.log(match);
        console.log(history);
        
        return(
            <div className = {styles.borderContainer}>
                <p> {this.props.param.name} </p>
            </div>
        )
    }
}