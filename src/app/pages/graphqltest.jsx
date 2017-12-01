import React from 'react';
import astyles from './allpages.scss';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_USER_QUERY = gql`query{
        users{
            email
            username
        }
    }`

class TestPage extends React.Component {
    render() {
        if (this.props.data.loading) {
            return (
                <div id="gql_loading">
                    <div>
                        Loading fwom gwaphql endpoint!
                    </div>
                </div>
            )
        }
        return this.props.data.users.map(u => {
            if (u.email == null || u.username == null) return;
            return (
                <div className={astyles.borderContainer}>
                    <p> This user's email: {u.email} </p>
                    <p> This user's username: {u.username} </p>
                    <p> This user's bio (if applicable): {u.bio} </p>
                </div>
            )
        })
    }
}

const TestPageWithQuery = graphql(ALL_USER_QUERY, {
    options: {
        fetchPolicy: 'network-only',
    },
})(TestPage)

export default TestPageWithQuery;