import {Link} from 'react-router-dom'
import axios from 'axios';
import {api} from '../constant'
import {history} from '../routes/AppRouter'
import {connect} from 'react-redux'
import style from '../styles/Navbar.module.css'

const Navbar = props => {
    const handleLogout = async () => {
        const token = window.localStorage.getItem('token');
        try {
            const res = await axios.post(`${api}/users/logout`,{},{headers:{Authorization:'Bearer '+token}})
            if(res.status === 200) {
                window.localStorage.removeItem('token');
                history.push('/signin')
                this.props.dispatch({type:'REMOVE_POSTS'})
            }
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <div style={{
            display:'flex',
            width:'100%',
            height:'20px',
            justifyContent:'space-between',
            padding:'30px',
            backgroundColor:'#1e88e5',
            alignItems:'center',
            marginBottom:'20px'
            }}>
                <h3 style={{color:'white',margin:'0',padding:'0'}}>
                    <Link className={style.head} to='/posts'>Home</Link>
                </h3>
                <h3 style={{margin:'0',padding:'0'}} onClick={handleLogout}>
                    <span className={style.head}>Logout</span>
                </h3>
        </div>
    )
}
export default connect()(Navbar);