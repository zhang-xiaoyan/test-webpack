import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '@store';

import AppRouter from '@router';

class App extends React.Component{
    render() {
        return (
            <AppRouter />
            // <Provider store={store}>
            //     <AppRouter />
            // </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));