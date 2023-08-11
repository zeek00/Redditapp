import {React } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Post.module.css'
import UpVote from './Vote/UpVote'
import DownVote from './Vote/DownVote'
import { BiMessageDetail } from 'react-icons/bi'

export default function Post(props) {
//console.log("props:" + JSON.stringify(props))
const goToPage = useNavigate()

const clickedComments = () => {
  // console.log("comments button was clicked, post id is: " + (JSON.stringify(props.onPost.id)))
  console.log("comments button was clicked, post id is: " + (JSON.stringify(props.about)))
  goToPage(`/${props.onPost.id}`)

}
  return (
    
    <div className={styles.container}>
        <div className={styles.vote}>
            <UpVote />
            <p>{props.onPost.ups}</p>
            <DownVote />
        </div>
        <div className={styles.body}>
            <div className={styles.profileInfo}>
              <img alt="" />
              <p>{props.onPost.subreddit_name_prefixed}</p>
            </div>
            
            <div className={styles.title}>
              <p>{props.onPost.title}</p>
            </div>

            <div className={styles.content}>
              <img src={`${props.onPost.imageUrl}`} alt="post title name" ></img>
            </div>
            
            <div className={styles.tools}>
              <Link className={styles.link} to={`/${props.onPost.id}`} onClick={clickedComments} >
                <BiMessageDetail className={styles.commentFont} /> 
                <p>{props.onPost.num_comments} Comments</p>
              </Link>
            </div>
            
        </div>
    </div>
   
  )
}
