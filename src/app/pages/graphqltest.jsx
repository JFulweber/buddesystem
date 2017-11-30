import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_USER_QUERY = gql`query{
        users{
            email
        }
    }`

class TestPage extends React.Component {
    render() {
        if (this.props.data.loading) {
            console.log('loading!!!');
            return (
                <div id="loading">
                    <div>
                        Loading fwom gwaphql endpoint!
                    </div>
                </div>
            )
        }
        console.log(this.props.data)
        return (
            <div id="graphql render">
                <p> hewwo im fwom gwaphqyuel! haiii :3 </p>
            </div>
        )
    }
}

const TestPageWithQuery = graphql(ALL_USER_QUERY, {
    options: {
        fetchPolicy: 'network-only',
    },
})(TestPage)

export default TestPageWithQuery;