import React from 'react';
import styles from '../styles/Posts.module.css'
import Menu from '../components/Menu';
import {api} from '../constant'
import {connect} from 'react-redux'
import {addPosts} from '../actions/posts'
import PostsList from '../components/PostsList';
import CommunityList from '../components/CommunityList';

class Posts extends React.Component {
    state = {
        showPosts:false
    }
    async componentDidMount() {
        const token = window.localStorage.getItem('token');
        try {
            // const res = await axios.get(`${api}/posts`,{headers:{Authorization:'Bearer '+token}});
            const res = await fetch(`${api}/posts`,{headers: new Headers({
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + token
            })})
            const data = await res.json()
            this.props.dispatch(addPosts(data));
            this.setState({
                showPosts:true
            })
        }catch(err) {
            console.log(err)
        }
    }
    render() {
        return(
            <div className={styles.flexContainer}>
                <Menu />
                {this.state.showPosts && <PostsList />}
                <CommunityList />
            </div>
        )
    }
}
export default connect()(Posts);