import React, { PureComponent } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Topic extends PureComponent {

    render() {
        return <tr>
            <td><Link to={`/topic/${this.props.topicId}`}>{this.props.subject}</Link></td>
            <td>{this.props.author.name}</td>
        </tr>;
    }

    static get propTypes() {
        return {
            topicId: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired,
            author: PropTypes.object.isRequired
        }
    }
}

