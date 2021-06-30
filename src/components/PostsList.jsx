import React from 'react';
import {connect} from 'react-redux'
import Post from './Post';
import styles from '../styles/postlist.module.css'

class PostList extends React.Component {

    render() {
        console.log('frm postslist',this.props.posts)
        return(
            <div className={styles.postsFlex}>
                {this.props.posts.map((post) => <Post {...post} />)}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    posts:state.posts
})
export default connect(mapStateToProps)(PostList)