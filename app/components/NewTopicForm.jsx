import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




export class NewTopicForm extends PureComponent {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { subject, author, startPost } = this.refs;
        const { onNewTopicSubmit } = this.props;
        if(onNewTopicSubmit) {
            onNewTopicSubmit({subject: subject.value, author: author.value, startPost: startPost.value});
        }
    }

    componentDidMount() {
        const { subject, startPost } = this.refs;
        subject.value = this.props.subject || '';
        startPost.value = this.props.startPost || '';
    }

    render() { 
        return <Card><Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId='formSubject'>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control ref='subject'/>
                    </Form.Group>
                    <Form.Group controlId='formAuthor'>
                        <Form.Label>Author</Form.Label>
                        <Form.Control ref='author'/>
                    </Form.Group>
                    <Form.Group controlId='formStartPost'>
                        <Form.Control as='textarea' ref='startPost'/>
                    </Form.Group>
                    <Button type='submit'>Create</Button>
                </Form>
            </Card>
                
    }

    static get propTypes() {
        return {
            subject: PropTypes.string,
            startPost: PropTypes.string,
            onNewTopicSubmit: PropTypes.func
        }
    } 
}