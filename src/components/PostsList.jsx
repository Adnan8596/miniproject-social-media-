import React from 'react';
import {connect} from 'react-redux'
import Post from './Post';
import styles from '../styles/postlist.module.css'

class PostList extends React.Component {

    render() {
        return(
            <div className={styles.postsFlex}>
                {(this.props.posts.length > 0) && this.props.posts.map((post) => <Post key={post._id} {...post} />)}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    posts:state.posts
})
export default connect(mapStateToProps)(PostList)