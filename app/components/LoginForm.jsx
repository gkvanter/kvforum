import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export class LoginForm extends PureComponent {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, password } = this.refs;
        const { onSubmit } = this.props;
        if(onSubmit) {
            onSubmit({username: username.value, password: password.value});
        }
    }


    render() { 
        return <Card style={{margin: '15px', padding: '10px'}}>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='formUsername'>
                    <Row>
                        <Col sm='2'>
                            <Form.Label>Username</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control ref='username'/>
                        </Col>
                    </Row>
                </Form.Group>
                    
                <Form.Group controlId='formPassword'>
                    <Row>
                        <Col sm='2'>
                            <Form.Label>Password</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control ref='password' type='password'/>
                        </Col>
                    </Row>
                </Form.Group>
                <Button type='submit' style={{float: 'right'}}>Log in</Button>
            </Form>
        </Card>
                
    }

    static get propTypes() {
        return {
            onSubmit: PropTypes.func
        }
    } 
}