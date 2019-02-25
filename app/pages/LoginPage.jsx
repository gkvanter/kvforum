import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { LoginForm } from '../components/LoginForm.jsx';
import { Actions } from '../store/Actions.jsx';



export class LoginPage extends PureComponent {

    render() {
        const { store } = this.context;
        const { user } = store.getState();
        const submitHandler = (login) => {
            store.dispatch(Actions.LOGIN.create(login.username, v4()))
        };
        return  (user && user.id) ?
            <Redirect to='/' />
        :    
            <div>
                <div>Authentication</div>
                <LoginForm onSubmit={submitHandler} />
            </div>
        ;
    }

    static get contextTypes () {
        return {
            store: PropTypes.object
        };
    } 
}