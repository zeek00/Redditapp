import React from 'react'
import styles from './Search.module.css'
import {FiSearch} from 'react-icons/fi'

export default function Search() {
  return (
    <div className={styles.container}>
        <FiSearch className={styles.searchFont} />
        <input type="search" name="" id="" placeholder='Search Posts' />
    </div>
  )
}
