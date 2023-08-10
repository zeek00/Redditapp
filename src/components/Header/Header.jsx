import React from 'react'
import styles from './Header.module.css'
import Search from '../../api/search/Search'
import { Link } from 'react-router-dom'


export default function Header() {
  return (

      <div className={styles.container}>
       <Search />
      
    </div>
    
  
    
  )
}
