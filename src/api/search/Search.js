import {React , useState, Fragment} from 'react'
import styles from './Search.module.css'
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


export default function Search() {
  const [focus, setFocus] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("")
  const [isMessage, setIsMessage] = useState(false)
  const navigate = useNavigate()
  const searchFocus = ()=>{
    console.log('focusing');
    setFocus(true)
    
  }


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
    <Fragment>
      <form className={styles.container} onSubmit={submitHandler} aria-label="searchForm">
        <FiSearch className={focus ? styles.focus : styles.searchFont} />
        <input
            type="search"
            name="srch"
            id="srch"
            onFocus={searchFocus}
            onBlur={()=>setFocus(false)}
            onChange={(e)=>{setSearchPhrase(e.target.value)}}
            placeholder='Search-Posts' />
      </form>
      {isMessage && <p className={styles.message}>Please type in at least 5 characters</p>}
    </Fragment>

       
    
  )
}
