import React from 'react';
import styles from '../styles/Posts.module.css'
import Menu from '../components/Menu'

class Posts extends React.Component {
    render() {
        return(
            <div className={styles.flexContainer}>
                <Menu />
            </div>
        )
    }
}
export default Posts;