import {Link} from 'react-router-dom'
import style from '../styles/Navbar.module.css'

const Navbar = props => (
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
            <h3 style={{margin:'0',padding:'0'}}>
                <Link className={style.head}>Logout</Link>
            </h3>
    </div>
)
export default Navbar;