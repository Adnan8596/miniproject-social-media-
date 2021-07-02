import React from 'react';
import {Card} from 'semantic-ui-react';
import { connect } from 'react-redux'

import styles from '../styles/communitylist.module.css';

const CommunityList = props => {
    return(
        <div>
            {props.user.name && (<div className={styles.communityListContainer}>
            <Card>
                <Card.Content>
                    <Card.Header>
                        Community You Follow
                    </Card.Header>
                    <div className={styles.CommunityList}>
                        {props.user.joinedcommunity.map((community) => <a className={styles.link} href={`http://localhost:8000/community/${community}/${props.user._id}/chat`} target='_blank'>{community}</a>)}
                    </div>
                </Card.Content>
            </Card>
        </div>)}
        </div>
    )
}
const mapStateToProp = state => ({
    user:state.user
})
export default connect(mapStateToProp)(CommunityList);
