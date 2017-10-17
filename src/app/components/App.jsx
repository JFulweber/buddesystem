import React from 'react';
import MasterLayout from '../layouts/MasterLayout/MasterLayout.jsx';
import MainPage from '../pages/MainPage.jsx'

export default class App extends React.Component {
    render() {
        return (
            <MasterLayout>
                <MainPage/>
            </MasterLayout>
        )
    }
}