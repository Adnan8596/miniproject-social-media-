import React from 'react';
import {Route, Switch, Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import {connect} from 'react-redux'
import {api} from '../constant'

import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Posts from '../dashboard/Posts';
import { addUser } from '../actions/auth';
import '../App.css'
import Navbar from '../components/Navbar';
import CreateCommunity from '../components/CreateCommunity';
import CreatePost from '../components/CreatePost';
import FollowCommunity from '../components/FollowCommunity';

export const history = createHistory();

class AppRouter extends React.Component {

    async componentDidMount() {
        const token = window.localStorage.getItem('token');
        console.log(this.props.user.token)
        if(!this.props.user.token) {
            if(token) {
                try {
                    console.log('hi')
                    const res = await fetch(`${api}/users/me`,{headers: new Headers({
                        'Authorization':'Bearer ' + token
                    })})
                    const user = await res.json();
                    this.props.dispatch(addUser(user))
                } catch(err) {
                    console.log(err)
                }
            }
        }
    }
    render() {
        return(
            <div style={{backgroundColor:'#F0F2F5'}}>
            <Router history={history}>
                <Navbar />
                <Switch>
                    <Route path='/signup' exact={true} component={SignUp} />
                    <Route path='/signin' exact={true} component={SignIn} />
                    <Route path='/posts' exact={true} component={Posts} />
                    <Route path='/createcommunity' exact={true}  component={CreateCommunity}/>
                    <Route path='/createpost' exact={true} component={CreatePost} />
                    <Route path='/followcommunity' exact={true} component={FollowCommunity} />
                </Switch>
            </Router>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    user:state.user
})
export default connect(mapStateToProps)(AppRouter);
