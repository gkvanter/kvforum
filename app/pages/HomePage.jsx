import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Header } from '../components/Header.jsx';
import { TopicListProvider } from '../components/TopicListProvider.jsx';



export class HomePage extends PureComponent {
    render() {
        return <div>
            <Header />
            <div><Link to="new-topic"><Button>New Topic</Button></Link></div>
            <TopicListProvider />
        </div>;
    }

    static get contextTypes () {
        return {
            store: PropTypes.object
        };
    } 
}