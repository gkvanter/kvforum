import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export class Post extends PureComponent {

    render() {
        const dateFormat = {day: '2-digit', month: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric'};
        return <tr>
            <td style={{width: '20%'}}>
                {this.props.author.name}
            </td>
            <td>
                <div style={{marginBottom: '5px'}}>
                    <span style={{fontSize: 'x-small'}}>{`Edited: ${this.props.modified.toLocaleDateString('ru-RU', dateFormat)}`}</span>
                    <Button style={{float: 'right'}} size='sm'>...</Button>
                </div>
                <pre>{this.props.text}</pre>
            </td>
        </tr>;
    }

    static get propTypes() {
        return {
            postId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            author: PropTypes.object.isRequired,
            modified: PropTypes.object
        }
    }
}

