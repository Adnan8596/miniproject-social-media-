import React from 'react';
import styles from '../styles/followcommunity.module.css'
import {Form,Button,Input} from 'semantic-ui-react';
import {api} from '../constant'

class FollowCommunity extends React.Component {
    state = {
        community:''
    }
    handleChange = e => {
        this.setState({community:e.target.value})
    }
    handleSubmit = async e => {
        e.preventDefault();
        try {
            const token = window.localStorage.getItem('token');
            const res = await fetch(`${api}/community/${this.state.community}/join`,
            {method:'POST',headers: new Headers({
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + token
            })})
            console.log(res)
            this.props.history.push('/posts')
        }catch(err) {
            console.log(err)
        }
    }
    render() {
        return(
            <div className={styles.flexContainer}>
                <div style={{width:'30%'}}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Community Name:</label>
                        <Input 
                        required={true}
                        size='large'
                        type="text" 
                        placeholder='pdacollage'
                        value={this.state.community}
                        onChange={this.handleChange}
                        fluid
                        />
                    </Form.Field>
                    <Button type='submit'>Follow</Button>
                </Form>
                </div>
            </div>
        )
    }
}
export default FollowCommunity;