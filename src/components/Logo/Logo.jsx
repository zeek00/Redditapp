import React from 'react'
import styles from './Logo.module.css'
import { Link } from 'react-router-dom'
import Search from '../../api/search/Search'
import {SiNetapp} from 'react-icons/si'
import PostsRoutes from '../../app/routes'

export default function Logo() {
  return (
    <div className={styles.container}>
        <Link to={PostsRoutes.homePageRoute()} className={styles.text}>REDdit</Link>
      <SiNetapp className={styles.icon} />
    </div>
  );
}
