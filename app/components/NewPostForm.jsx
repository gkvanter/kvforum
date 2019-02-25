import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




export class NewPostForm extends PureComponent {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { author, text } = this.refs;
        const { onNewPostSubmit, topicId } = this.props;
        if(onNewPostSubmit) {
            onNewPostSubmit({topicId: topicId, author: author.value, text: text.value});
        }
    }

    componentDidMount() {
        const { author, text } = this.refs;
        author.value = this.props.author || '';
        text.value = this.props.text || '';
    }

    render() { 
        return <Card style={{margin: '10px', padding: '10px'}}>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='formSubject'>
                    <Row>
                        <Col sm='1'>
                            <Form.Label>Author</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control size='sm' ref='author'/>
                        </Col>
                    </Row>
                </Form.Group>
                    
                <Form.Group controlId='formStartPost'>
                    <Form.Control as='textarea' ref='text'/>
                </Form.Group>
                <Button type='submit' style={{float: 'right'}}>Create</Button>
            </Form>
         </Card>
                
    }

    static get propTypes() {
        return {
            topicId: PropTypes.string.isRequired,
            author: PropTypes.string,
            text: PropTypes.string,
            onNewPostSubmit: PropTypes.func,
            onNewPostCancel: PropTypes.func
        }
    } 
}