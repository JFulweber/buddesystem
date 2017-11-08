import React from 'react';
import styles from './banner.scss';

export default class Banner extends React.Component{
    render(){
        return(
            <div className = {styles.banner}>
                <p>{this.props.children}</p>
            </div>
        )
    }
}