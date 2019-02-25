import React, { PureComponent } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { Topic } from './Topic.jsx';

export class TopicList extends PureComponent {
    constructor() {
        super();
    }
    render() {
        return <Table striped bordered hover size='sm'>
            <thead>
                <tr>
                    <th>Topic</th><th style={{width: '20%'}}>Author</th>
                </tr>
            </thead>
            <tbody>
            {
                this.props.topics.map((d) => 
                    <Topic key={d.id} topicId={d.id} subject={d.subject} author={d.author} />
                )
            }
            </tbody>
        </Table>;
    }

    static get propTypes() {
        return {
            topics: PropTypes.array.isRequired
        }
    }
}

