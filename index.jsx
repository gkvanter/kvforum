import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import { v4 } from 'uuid';
import { App } from './app/App.jsx';
import * as Reducer from './app/store/Reducer.jsx';

const data = {
    user: {name: 'Guest', id: null},
    topics: {
        '0348ab52-408e-4b80-9726-f8bc046db6f3': {subject: 'Тема номер один', author: {name: 'ИмяАвтора'}, modified: new Date(2018, 2, 10, 11, 20, 25)}
    },
    posts: {
        '0348ab52-408e-4b80-9726-f8bc046db6f3': {
            startPost: {id: v4(), text: 'Начальный комментарий в теме', author: {name: 'ИмяАвтора'}, modified: new Date(2018, 2, 10, 11, 20, 25)},
            posts: [
                {id: v4(), text: 'Второй комментарий в теме', author: {name: 'Имя 2'}, modified: new Date(2018, 2, 10, 11, 20, 35)},
                {id: v4(), text: 'Третий комментарий', author: {name: 'ИмяАвтора'}, modified: new Date(2018, 2, 10, 11, 25, 25)}
            ]
        }
    }
};

const store = Redux.createStore(Reducer.base, data);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
    document.getElementById('react-content'));
};

render();