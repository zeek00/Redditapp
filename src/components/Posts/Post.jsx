import React from 'react'
import styles from './Post.module.css'
import UpVote from './Vote/UpVote'
import DownVote from './Vote/DownVote'
import {BiMessageDetail} from 'react-icons/bi'

export default function Post(props) {
  return (
    <div className={styles.container}>
        <div className={styles.vote}>
            <UpVote />
            <p>{5}</p>
            <DownVote />
        </div>
        <div className={styles.body}>
            <div className={styles.profileInfo}><p>{}userinfo</p></div>
            <div className={styles.title}><p>{}title</p></div>
            <div className={styles.content}></div>
            <div className={styles.comment}>
                <BiMessageDetail className={styles.commentFont} /> 
                <p>{250} Comments</p>
            </div>
            
        </div>
    </div>
  )
}
