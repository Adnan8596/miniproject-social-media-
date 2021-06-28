import React from 'react';
import {Route, Switch, Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import SignUp from '../components/SignUp';

export const history = createHistory();

class AppRouter extends React.Component {
    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/siginup' exact={true} component={SignUp} />
                </Switch>
            </Router>
        )
    }
}
export default AppRouter;
