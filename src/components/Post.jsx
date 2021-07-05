import React, {useState} from 'react'
import {Card,Image,Icon,Form, Input} from 'semantic-ui-react'
import styles from '../styles/post.module.css'

const Post = props => {
    const userLiked = props.likes.some(like => like === props.userId)
    const [state, setstate] = useState({
        formshow:false,
        commentshow:false,
        comment:''
        
    })
    const handleSubmit = e => {
        e.preventDefault();
    }   
    const onCommentType = e => {
        setstate({
            ...state,
            comment:e.target.value
        })
    }
    const handleShowForm = () => {
        setstate({
            ...state,
            formshow: !state.formshow
        })
    }
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
                        <div onClick={handleShowForm} className={styles.commentBtn}>
                            Comment
                        </div>
                    </div>
                    {state.formshow && (
                        <Form onSubmit={handleSubmit}>
                        <Input
                        onChange={onCommentType} 
                        size='mini' 
                        fluid 
                        action='comment' 
                        placeholder='Type comment'
                        value={state.comment}
                        />
                    </Form>
                    )}
                </Card.Content>
            </Card>
        </div>
    )
}
export default React.memo(Post)