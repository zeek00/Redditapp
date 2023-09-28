import React from 'react'
import styles from './Hero.module.css'
import svg from '../../assets/socialtwo.svg'
import { Link } from 'react-router-dom'
import PostsRoutes from '../../app/routes'

export default function Hero() {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.h1}>A simple  REDdit APP</h1>
          <p aria-label="text-paragraph" className={styles.p}>Search, view posts and comments from the Reddit API</p>
          <div className={styles.group}>
            <Link to={PostsRoutes.popularPostsRoute()} className={styles.btn && styles.first}>Popular Posts </Link> <span> or </span> <Link to={PostsRoutes.bestPostsRoute()} className={styles.btn}> Best Posts</Link>
          </div>
        </div>
        <div className={styles.svg}>
            <img src={svg} alt="social connection svg" className={styles.content} />
        </div>
    </div>
  )
}
