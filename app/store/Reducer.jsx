import { Actions } from './Actions.jsx';

export const base = (state, action) => {
    const act = Actions[action.type];
    if(act) {
        return act.execute(state, action);
    } 
    return state;
    // switch(action.type) {
    //     case 'ADD_TOPIC' : {
    //         const topicId =  v4();
    //         const author = {name: action.author};
    //         const topics = { ...state.topics};
    //         topics[topicId] = {subject: action.subject, author: author, modified: new Date()};
    //         const posts = { ...state.posts };
    //         posts[topicId] = {startPost: {id: v4(), text: action.startPost, author: author}, posts: []};
    //         return {...state, topics, posts};
    //     }
    //     case 'ADD_POST' : {
    //         const postId =  v4();
    //         const topicId = action.topicId;
    //         const topicPosts = state.posts[topicId];
    //         const posts = { ...state.posts };
    //         posts[topicId] = {...topicPosts, posts: [...topicPosts.posts, {id: postId, text: action.text, author: {name: action.author}}]};
    //         return {...state, posts};
    //     }
    //     default: {
    //         return state;
    //     }
    // }
};