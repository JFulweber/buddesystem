import React from 'react';
import styles from './profile.scss';
import astyles from './allpages.scss';
import {BorderContainer} from '../components/UI';

export default class Profile extends React.Component {
    render() {
        console.log(styles.profile);
        console.log(this.props);
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