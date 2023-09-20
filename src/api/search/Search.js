import {React , useState} from 'react'
import styles from './Search.module.css'
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function Search() {

  const [searchPhrase, setSearchPhrase] = useState("")
    const [isMessage, setIsMessage] = useState(false)
  const navigate = useNavigate()
console.log("ww")

    const submitHandler = (event) => {
    event.preventDefault()
    if (searchPhrase.length >= 5){
        setIsMessage(false)
        console.log("search phrase is : " + JSON.stringify(searchPhrase))
        navigate(`/search/${searchPhrase}`)
        console.log("qq")
    }
    else {
        console.log("needed at least 5 characters, received: " + JSON.stringify(searchPhrase))
        setIsMessage(true)
    }

  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} aria-label="searchForm" >
         <FiSearch className={styles.searchFont} />
        <input type="search" name="srch" id="srch" onChange={(e)=>{setSearchPhrase(e.target.value)}} placeholder='Search-Posts' />
      </form>
        {isMessage && <p>Please type in at least 5 characters</p>}
    </div>
  )
}
