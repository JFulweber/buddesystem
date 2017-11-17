import React from 'react';
import astyles from './allpages.scss';
import {BorderContainer, BigText, Descriptor} from '../components/UI/';

export default class Page404 extends React.Component{
    render(){
        console.log("in 404");
        console.log(this.props);
        return(
            <BorderContainer>
                <BigText> 404 Page Not Found </BigText>
                <Descriptor> The path is invalid, deleted, or changed. Please try something else. </Descriptor>
            </BorderContainer>
        )
    }
}