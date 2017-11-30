import React from 'react';
import styles from './profile.scss';
import astyles from './allpages.scss';
import {BorderContainer} from '../components/UI';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


function ProfilePage({data}){
    console.log('HEWWO????')
    console.log(this.data)
    return(
        <p>{user.email}</p>
    )
}

export default class Profile extends React.Component {
    render() {
        return (
            <BorderContainer>
                <div className={styles.profile}>
                    <div className={styles.bio}>
                        <div className={styles.left}>
                            <img src="https://i.pinimg.com/736x/c2/7c/2e/c27c2e676900537b5b7a1bcf936097f1--animated-smiley-faces-smiley-face-images.jpg"/>
                        </div>
                        <div className={[styles.right].join()}>
                            <p> My username is {this.props.match.params.name}</p>
                            <p> Sample text. Everyone is a Mr. Smiley Man, and everyone has this as their bio. This is to be populated by GraphQL queries, but is not yet implemented as per my schedule. thanks bro</p>
                        </div>
                    </div>
                    <div className={styles.left}>
                        <p> My friends, comments, posts, etc. will be enumerated here by graphql calls to be implemented... </p>
                    </div>
                    <div className={styles.right}>
                        <p> My interests and other data here will be enumerated by graphql calls to be implemented...</p>
                    </div>
                </div>
            </BorderContainer>
        )
    }
}

var query = gql`query{
    user(username:"test"){
        email
    }
}`

const test = graphql(query)(ProfilePage);
console.log(test);