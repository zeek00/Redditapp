import {React , useState} from 'react'
import styles from './Search.module.css'
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function Search() {

  const [searchPhrase, setSearchPhrase] = useState("")
  const navigate = useNavigate()

  const submitHandler = (event) => {
    event.preventDefault()
    
    console.log("search phrase is : " + JSON.stringify(searchPhrase))
    navigate(`/search/${searchPhrase}`)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
         <FiSearch className={styles.searchFont} />
        <input type="search" name="srch" id="srch" onChange={(e)=>{setSearchPhrase(e.target.value)}} placeholder='Search Posts' />
      </form>
       
    </div>
  )
}
