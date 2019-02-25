import { v4 } from 'uuid';

export const Actions = {
    LOGIN : {
        create(username, userId) {
            return {type: 'LOGIN', username, userId};
        },

        execute(state, action) {
            const user = {name: action.username, id: action.userId};
            console.log(user);
            return {...state, user};
        }
    },

    ADD_TOPIC : {
        create(subject, author, startPost) {
            return {type: 'ADD_TOPIC', subject, author, startPost};
        },

        execute(state, action) {
            const topicId =  v4();
            const author = {name: action.author};
            const topics = { ...state.topics};
            topics[topicId] = {subject: action.subject, author: author, modified: new Date()};
            const posts = { ...state.posts };
            posts[topicId] = {startPost: {id: v4(), text: action.startPost, author: author}, posts: []};
            return {...state, topics, posts};
        }
    },

    ADD_POST : {
        create(topicId, text, author) {
            return {type: 'ADD_POST', topicId, text, author};
        },
        
        execute(state, action) {
            const postId =  v4();
            const topicId = action.topicId;
            const topicPosts = state.posts[topicId];
            const posts = { ...state.posts };
            posts[topicId] = {...topicPosts, posts: [...topicPosts.posts, {id: postId, text: action.text, author: {name: action.author}, modified: new Date()}]};
            return {...state, posts};
        }
    }
};