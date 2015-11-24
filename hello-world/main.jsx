/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Main from 'components/main';

export default React.createClass( {
    displayName: 'HelloWorld',

    render() {
        return (
            <Main>
                <h1>Hello, World!</h1>
            </Main>
        );
    }

} );
