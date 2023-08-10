import React from 'react'
import styles from './Header.module.css'
import Search from '../../api/search/Search'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'

export default function Header() {
  const btn = {
    button_one: 'Best Post',
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
            <Button name={btn.button_one} />
        </div>
    </div>
  )
}
