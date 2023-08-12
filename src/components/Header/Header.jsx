import React from 'react'
import styles from './Header.module.css'
import Search from '../../api/search/Search'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import PostsRoutes from '../../app/routes'

export default function Header() {
  const btn = {
    b1: 'Best ',
    b2: 'Popular ',
  }

  return (
    <div className={styles.container}>
        <div className={styles.search}>
            <Search />
        </div>

        <div className={styles.logo}>
            <Logo />
        </div>
        
        <div className={styles.button}>
            <Button to={PostsRoutes.popularPostsRoute()} name={btn.b2} />
            <Button to={PostsRoutes.bestPostsRoute()} name={btn.b1} />
        </div>
    </div>
  )
}
