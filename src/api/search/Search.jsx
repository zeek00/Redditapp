import {React , useState} from 'react'
import styles from './Search.module.css'
import {FiSearch} from 'react-icons/fi'

export default function Search() {
  //const [searchPhrase, setSearchPhrase] = useState("")



//use form,when submit Navigate to /search/inputValue

  return (
    <div className={styles.container}>
        <FiSearch className={styles.searchFont} />
        <input type="search" name="" id="" placeholder='Search Posts' />
    </div>
  )
}
