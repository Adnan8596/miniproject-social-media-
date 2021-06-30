import React from 'react';
import {Form,TextArea,Button,Select,Input} from 'semantic-ui-react'
import axios from 'axios';
import {api} from '../constant'

import styles from '../styles/createpost.module.css'

class CreatePost extends React.Component {
    state = {
        joinedCommunity:[],
        communitySelect:'',
        post:'',
        file:null
    }
    async componentDidMount() {
        const token = window.localStorage.getItem('token');
        try {
            const res = await axios.get(`${api}/users/me`,{headers:{Authorization:'Bearer '+token}});
            const data = res.data;
            const joinedCommunity = data.user.joinedcommunity.map((data,i) => ({key:`${i}`,value:data,text:data}))
            this.setState({
                joinedCommunity
            })
        }catch(err) {
            console.log(err)
        }
    }
    handleSelectChange = e => {
        this.setState({
            communitySelect:e.target.children[0].textContent
        })
    }
    handlePostChange = e => {
        this.setState({
            post:e.target.value
        })
    }
    handleFileChange = e => {
        this.setState({
            file:e.target.files[0]
        })
    }
    handleSubmit = async e => {
        const newData = {
            post:this.state.post,
            community:this.state.communitySelect
        }
        const token = window.localStorage.getItem('token');
        try {
            const res = await axios.post(`${api}/posts`,newData,{headers:{Authorization:'Bearer '+token}});
            const formData = new FormData();
            formData.append('image', this.state.file)
            const resimg = await axios.post(`${api}/posts/${res.data._id}/image`,formData,{headers:{Authorization:'Bearer '+token}})
            this.props.history.push('/posts')
        }catch(err) {
            console.log(err)
        }
    }
    render() {
        return(
            <div className={styles.formFlex}>
                <div className={styles.formContainer}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Post:</label>
                            <TextArea 
                            placeholder='write post' 
                            value={this.state.post}
                            onChange={this.handlePostChange}
                            required={true}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Community</label>
                            <Select 
                            placeholder='Select Community' 
                            options={this.state.joinedCommunity}
                            onChange={this.handleSelectChange}
                            required={true}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Choose a image</label>
                            <Input 
                            type='file' 
                            accept="image/*"
                            onChange={this.handleFileChange}
                            />
                        </Form.Field>
                        <Button type='submit' positive>Create Post</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
export default CreatePost;