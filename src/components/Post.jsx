import React, {useState} from 'react'
import {Card,Image,Icon,Form, Input,Transition,Comment} from 'semantic-ui-react'
import axios from 'axios';
import {api} from '../constant';
import styles from '../styles/post.module.css'

const Post = props => {
    const userLiked = props.likes.some(like => like === props.userId)
    const [state, setstate] = useState({
        formshow:false,
        commentshow:false,
        comment:'',
        animecmt:true,
        commentsShow:false
        
    })
    const handleSubmit = async e => {
        const token = window.localStorage.getItem('token');
        try {
           const res = await axios.post(`${api}/comment/${props._id}`,{comment:state.comment},{headers:{Authorization:'Bearer '+token}})
           props.handleDispatch(res.data, props._id)
           setstate({
               ...state,
               comment:''
           })
        }catch(err) {
            console.log(err)
        }
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
            formshow: !state.formshow,
            animecmt: !state.animecmt
        })
    }
    const handleShowCmt = () => {
        setstate({
            ...state,
            commentsShow: !state.commentsShow
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
                        onClick={() => !userLiked && props.handleLike(props._id)} 
                        className={styles.likeContainer}
                        style={{color:userLiked? '#0571ED':'black'}}
                        >
                            <div className={styles.likeCount}>
                                {props.likes.length}
                            </div>
                            <div className={styles.likeIcon}>
                                <Icon name={userLiked? "arrow alternate circle up outline" : "arrow alternate circle up"} /> 
                            </div>
                        </div>
                        <Transition animation='pulse' duration={200} visible={state.animecmt}>
                            <div onClick={handleShowForm} className={styles.commentBtn}>
                                Comment
                            </div>
                        </Transition>
                    </div>
                    <div className={styles.viewcmt} onClick={handleShowCmt}>
                        <span>view comments</span>
                    </div>
                    <Transition visible={state.formshow} animation='fade down' duration={200}>
                        <Form  onSubmit={handleSubmit}>
                            <Input
                            onChange={onCommentType} 
                            size='mini' 
                            fluid 
                            action='comment' 
                            placeholder='Type comment'
                            value={state.comment}
                            />
                        </Form>
                    </Transition>
                    <Comment.Group>
                        {state.commentsShow && props.comments.map(comment => (
                            <Comment>
                                <Comment.Avatar src={'data:image/png;base64,' +comment.owner.avatar} />
                                <Comment.Content>
                                    <Comment.Author as='a'>{comment.owner.name}</Comment.Author>
                                    <Comment.Text>{comment.comment}</Comment.Text>
                                </Comment.Content>
                            </Comment>
                        )).reverse()}
                    </Comment.Group>
                </Card.Content>
            </Card>
        </div>
    )
}
export default React.memo(Post)