import React from 'react';
import styles from './editprofile.scss';
import astyles from './allpages.scss';
import {BorderContainer, BigText, Divider} from '../components/UI';

export default class EditProfile extends React.Component{
    render(){
        return(
            <BorderContainer>
                <BigText>
                    Edit Your Profile
                </BigText>
                <Divider/>
                <form>
                    <p> Change Email </p>
                    <input type="email" placeholder="New email address"/>
                    <p> Change Pass </p>
                    <input type="text" placeholder="New pass"/>
                    <p/>
                    <input type="button" value="Save"/>
                </form>
            </BorderContainer>
        )
    }
}