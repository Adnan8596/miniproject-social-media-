import React from 'react';
import styles from '../styles/Posts.module.css'
import Menu from '../components/Menu';
import axios from 'axios'
import {api} from '../constant'
import {connect} from 'react-redux'
import {addPosts} from '../actions/posts'
import PostsList from '../components/PostsList';

class Posts extends React.Component {
    state = {
        showPosts:false
    }
    async componentDidMount() {
        const token = window.localStorage.getItem('token');
        try {
            const res = await axios.get(`${api}/posts`,{headers:{Authorization:'Bearer '+token}});
            this.props.dispatch(addPosts(res.data));
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
            </div>
        )
    }
}
export default connect()(Posts);