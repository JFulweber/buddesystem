import React from 'react';
import styles from './homepage.scss';
import Banner from '../components/Banner/Banner.jsx'
import {BigText, BorderContainer, Descriptor, Divider} from '../components/UI/';

export default class HomePage extends React.Component {
    render() {
        return (
            <div id='homepage' className={styles.homepage}>
                <Banner> Welcome to the BuddE System! </Banner>
                <BorderContainer>
                    <BigText> What is the BuddE System?</BigText>
                    <Descriptor>
                        The BuddE System is a psuedo-dating service that is meant to matchmake friends, not partners.
                        It is catered to those who have trouble socially be it due to anxiety, or any other social inhibitors.
                        Although, that does not mean you are not welcome if you don't have any trouble socially!
                    </Descriptor>
                    <Divider/>
                    <BigText>Why?</BigText>
                    <Descriptor>
                        I am working on this as a school project and as a way to familiarize myself with the React and NodeJS
                        ecosystems.
                    </Descriptor>
                </BorderContainer>
            </div>
        )
    }
}