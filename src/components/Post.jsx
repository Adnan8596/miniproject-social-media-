import React from 'react'
import {Card,Image} from 'semantic-ui-react'
import styles from '../styles/post.module.css'

const Post = props => {

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
                </Card.Content>
            </Card>
        </div>
    )
}
export default Post