import React from 'react';
import styles from '../styles/createcommunity.module.css'
import {Form,Button,Input} from 'semantic-ui-react';
import {connect} from 'react-redux'
import {addJoinedCommunity} from '../actions/auth'
import {api} from '../constant'

class CreateCommunity extends React.Component {
    state = {
        community:''
    }
    handleChange = e => {
        this.setState({community:e.target.value})
    }
    handleSubmit = async e => {
        e.preventDefault();
        const data = {
            name:this.state.community
        }
        try {
            const token = window.localStorage.getItem('token');
            const res = await fetch(`${api}/community`,
            {method:'POST',body:JSON.stringify(data),headers: new Headers({
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + token
            })})
            if(!res.ok)
                throw new Error('something is wrong')
            this.props.dispatch(addJoinedCommunity(this.state.community))
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
                    <Button type='submit'>Create</Button>
                </Form>
                </div>
            </div>
        )
    }
}
export default connect()(CreateCommunity);