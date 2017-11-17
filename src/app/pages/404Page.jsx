import React from 'react';
import astyles from './allpages.scss';
import {BorderContainer, BigText} from '../components/UI/';

export default class Page404 extends React.Component{
    render(){
        console.log("name jeffery");
        return(
            <BorderContainer>
                <BigText> 404 File Not Found </BigText>
            </BorderContainer>
        )
    }
}