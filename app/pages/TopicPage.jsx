import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Header } from '../components/Header.jsx';
import { Post } from '../components/Post.jsx';
import { NewPostForm } from '../components/NewPostForm.jsx';
import { Actions } from '../store/Actions.jsx';



export class TopicPage extends PureComponent {
    constructor() {
        super();
        this.state = {isEditing: false};
    }
    
    render() {
        const topicId = this.props.match.params.id;
        const { store } = this.context;
        const { topics, posts, user } = store.getState();
        const topic = topics[topicId];
        const topicPosts = posts[topicId];
        const newPostSubmit = (post) => {
            const { store } = this.context;
            store.dispatch(Actions.ADD_POST.create(topicId, post.text, post.author));
            this.setState({isEditing: false});
        };

        const { startPost } = topicPosts;
        return <div>
            <Header />
            <Breadcrumb>
                <Breadcrumb.Item active><Link to='/'>Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>{topic.subject}</Breadcrumb.Item>
            </Breadcrumb>
            <Table striped bordered>
                <tbody>
                    <Post text={startPost.text} author={startPost.author} postId={startPost.id} modified={startPost.modified} />
                    {
                        topicPosts.posts.map((post) => {
                            return <Post key={post.id} text={post.text} author={post.author} postId={post.id} modified={post.modified} />
                        })
                    }
                </tbody>
            </Table>
            {
                this.state.isEditing ?
                    <NewPostForm topicId={topicId} author={user && user.name ? user.name : ''} onNewPostSubmit={newPostSubmit} />
                : 
                    <Button onClick={()=>this.setState({isEditing: true})}>Add Post</Button>
            }
        </div>;
    }

    static get contextTypes () {
        return {
            store: PropTypes.object
        };
    } 
}