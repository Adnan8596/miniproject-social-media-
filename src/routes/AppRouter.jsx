import React from 'react';
import {Route, Switch, Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

export const history = createHistory();

class AppRouter extends React.Component {
    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/signup' exact={true} component={SignUp} />
                    <Route path='/signin' exact={true} component={SignIn} />
                </Switch>
            </Router>
        )
    }
}
export default AppRouter;
