import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/root-reducer';
const store = createStore(reducer, applyMiddleware(thunk));

import AppRouter from '@router';

class App extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));