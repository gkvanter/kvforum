import React, { PureComponent } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage.jsx';
import { NewTopicPage } from './pages/NewTopicPage.jsx';
import { TopicPage } from './pages/TopicPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';



export class App extends PureComponent {
    render() {
        return <div>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/new-topic' component={NewTopicPage} />
                <Route path='/topic/:id' component={TopicPage} />
                <Route exact path='/login' component={LoginPage} />
            </Switch>
        </BrowserRouter>
        </div>;
    }

    componentWillMount() {
        this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    static get contextTypes () {
        return {
            store: PropTypes.object
        };
    } 
}

