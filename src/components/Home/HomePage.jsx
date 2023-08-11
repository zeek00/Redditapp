import React from 'react'
import styles from './HomePage.module.css'
import Search from '../../api/search/Search'
import Logo from '../Logo/Logo'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

export default function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.hero}>
        <Hero />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
        

    </main>
  )
}
