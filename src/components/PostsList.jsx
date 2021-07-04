import React from 'react';
import {connect} from 'react-redux'
import Post from './Post';
import axios from 'axios'
import {api} from '../constant'
import {updatePost} from '../actions/posts'
import styles from '../styles/postlist.module.css'

class PostList extends React.Component {

    handleLike = async id => {
        const token = window.localStorage.getItem('token')
        try {
            const res = await axios.post(`${api}/posts/${id}/like`,0,{headers:{Authorization:'Bearer '+token}})
            this.props.dispatch(updatePost(res.data))
        }catch(err) {
            console.log(err)
        }
    }
    render() {
        console.log('frm postlist')
        return(
            <div className={styles.postsFlex}>
                {(this.props.posts.length > 0) && this.props.posts.map((post) => <Post 
                handleLike={this.handleLike} 
                key={post._id} 
                {...post} 
                userId={this.props.user._id}
                />)}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    posts:state.posts,
    user:state.user
})
export default connect(mapStateToProps)(PostList)