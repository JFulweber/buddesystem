import React from 'react';
import styles from './profile.scss';
import astyles from './allpages.scss';
import {BorderContainer} from '../components/UI';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class EmptyProfile extends React.Component{
    render(){
        var query = gql`query($username:String!){
            user(username:$username){
                username
                bio
                email
                interests
                groups{
                    name
                }
            }
        }`
        const FilledProfile = graphql(query, {
            options: {
                variables: {
                    username: this.props.match.params.name
                }
            }
        })(Profile);
        return <FilledProfile/>;
    }
}

class Profile extends React.Component {
    render() {
        if(this.props.data.loading){
            return <p> Loading... </p>
        }
        if(this.props.data.user===null || this.props.data.user===undefined){
            return (
                <BorderContainer>
                    <p> This user does not exist or there was an error. Please make sure their username is correct. </p>
                </BorderContainer>
            )
        }
        return (
            <BorderContainer>
                <div className={styles.profile}>
                    <div className={styles.bio}>
                        <div className={styles.left}>
                            <img src="https://i.pinimg.com/736x/c2/7c/2e/c27c2e676900537b5b7a1bcf936097f1--animated-smiley-faces-smiley-face-images.jpg"/>
                        </div>
                        <div className={[styles.right].join()}>
                            <p> My username is {this.props.data.user.username}.</p>
                            {this.getBio()}
                        </div>
                    </div>
                    <div className={styles.left}>
                        <p> User has not added any friends! Why not chat with them? </p>
                    </div>
                    <div className={styles.right}>
                        <p> User has not marked any interests. Let them know to do so!</p>
                    </div>
                </div>
            </BorderContainer>
        )
    }

    getBio(){
        if(this.props.data.bio == null){
            return <p> This user has not set their bio. </p>
        }
        else{
            return <p> {this.props.data.bio} </p>
        }
    }
}

export {Profile, EmptyProfile}