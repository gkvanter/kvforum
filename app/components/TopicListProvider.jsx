import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TopicList } from './TopicList.jsx'

export class TopicListProvider extends PureComponent {

    render() {
        const { store } = this.context;
        const topics = store.getState().topics;
        const topicList = Object.keys(topics).map((k) => ({id: k, ...topics[k]})).sort((a, b) => b.modified - a.modified);
        return <TopicList topics={topicList} />;
    }

    static get contextTypes () {
        return {
            store: PropTypes.object
        };
    } 
}
