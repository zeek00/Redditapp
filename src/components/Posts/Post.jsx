import React from 'react'
import styles from './Post.module.css'
import UpVote from './Vote/UpVote'
import DownVote from './Vote/DownVote'
import {BiMessageDetail} from 'react-icons/bi'

export default function Post(props) {
console.log("props:" + JSON.stringify(props))

  return (
    <div className={styles.container}>
        <div className={styles.vote}>
            <UpVote />
            <p>{props.onPost.ups}</p>
            <DownVote />
        </div>
        <div className={styles.body}>
            <div className={styles.profileInfo}><p>{}userinfo</p></div>
            <div className={styles.title}><p>{props.onPost.title}title</p></div>
            <img src={`${props.onPost.imageUrl}`} alt="post title name" ></img>

            <div className={styles.content}></div>
            <div className={styles.comment}>
                <BiMessageDetail className={styles.commentFont} /> 
                <p>{props.onPost.num_comments} Comments</p>
            </div>
            
        </div>
    </div>
  )
}
