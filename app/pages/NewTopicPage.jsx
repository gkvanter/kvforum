import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { NewTopicForm } from '../components/NewTopicForm.jsx';
import { Actions } from '../store/Actions.jsx';



export class NewTopicPage extends Component {

    constructor() {
        super();
        this.state = {redirect: null};
    }


    render() {
        const newTopicSubmit = (topic) => {
            const { store } = this.context;
            store.dispatch(Actions.ADD_TOPIC.create(topic.subject, topic.author, topic.startPost));
            this.setState({redirect: '/'});
        };
        return this.state.redirect ? 
            <Redirect to={this.state.redirect} /> : 
            <NewTopicForm onNewTopicSubmit={newTopicSubmit} />;
    }

    static get contextTypes () {
        return {
            store: PropTypes.object
        };
    } 
}