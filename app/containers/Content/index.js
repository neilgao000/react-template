import React from 'react';
import { Link } from 'react-router';

export default class Content extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <Link to="/">go to HomePage</Link>
            </div>
        );
    }
}
