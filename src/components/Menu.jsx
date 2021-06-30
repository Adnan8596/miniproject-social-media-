import styles from '../styles/Menu.module.css'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const MenuList = () => (
    <div className={styles.menuContainer}>
        <Menu size='large' vertical>
            <Link to='/profile' className={styles.menuLink}>
                <Menu.Item name='profile' link/>
            </Link>
            <Link to='/createpost'>
                <Menu.Item name='community' link>
                    New Post
                </Menu.Item>
            </Link>
            <Link to='/createcommunity'>
                <Menu.Item name='community' link>
                    Create community
                </Menu.Item>
            </Link>
            <Link to='/followcommunity'>
                <Menu.Item name='community' link>
                    Follow community
                </Menu.Item>
            </Link>
        </Menu>
    </div>
)
export default MenuList;