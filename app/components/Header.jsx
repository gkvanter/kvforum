import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Header extends PureComponent {

    render() {
        const { store } = this.context;
        const { user } = store.getState();
        return <div>
            <span>KvForum</span>
            <span style={{float: "right"}}>
            {
                (user && user.id) ? 
                    <span>Welcome {user.name}</span> 
                : 
                    <Link to="/login">Login</Link> 
            }
            </span>
        </div>;
    }

    static get contextTypes () {
        return {
            store: PropTypes.object
        };
    }
}

