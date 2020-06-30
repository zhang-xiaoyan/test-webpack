import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Index = Loadable({
    loader: () => import(/* webpackChunkName: 'home' */'@page/index'),
    loading: () => null
});
const List = Loadable({
    loader: () => import(/* webpackChunkName: 'list' */'@page/list'),
    loading: () => null
});

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/index' component={Index} />
                    <Route exact path='/list' component={List} />
                    <Route path='/' component={Index} />
                </Switch>
            </Router>
        )
    }
}

export default AppRouter;