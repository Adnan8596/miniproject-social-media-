import React from 'react'
import {Card,Image,Icon} from 'semantic-ui-react'
import styles from '../styles/post.module.css'

const Post = props => {
    const userLiked = props.likes.some(like => like === props.userId)
    return(
        <div className={styles.postContainer}>
            <Card fluid>
                <Card.Content>
                    <div className={styles.userInfoContainer}>
                        <div className="userImage">
                            <Image size='mini' src={'data:image/png;base64,' +props.owner.avatar} />
                        </div>
                        <div className="userInfo">
                            <div className="userName">
                                {props.owner.name}
                            </div>
                            <div className="communityName">
                                has posted in {props.community} community
                            </div>
                        </div>
                    </div>
                    <div className={styles.feed}>
                        {props.post}
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={`http://localhost:8000/api/posts/${props._id}/image`} alt="" srcset="" className={styles.img} />
                    </div>
                    <div className={styles.likeCommentContainer}>
                        <div 
                        onClick={() => props.handleLike(props._id)} 
                        className={styles.likeContainer}
                        style={{color:userLiked? '#0571ED':'black'}}
                        >
                            <div className={styles.likeCount}>
                                {props.likes.length}
                            </div>
                            <div className={styles.likeIcon}>
                                <Icon name='thumbs up' /> 
                            </div>
                        </div>
                        <div className={styles.commentBtn}>
                            Comment
                        </div>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}
export default Post