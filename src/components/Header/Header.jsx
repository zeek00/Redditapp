import React from 'react'
import styles from './Header.module.css'
import Search from '../../api/search/Search'


export default function Header() {
  return (
    <div className={styles.container}>
       <Search />
    </div>
  )
}
