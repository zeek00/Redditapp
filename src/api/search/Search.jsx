import {React , useState} from 'react'
import styles from './Search.module.css'
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function Search() {
  const [focus, setFocus] = useState(false);
  const searchFocus = ()=>{
    console.log('focusing');
    setFocus(true)
    
  }

  const [searchPhrase, setSearchPhrase] = useState("")
  const navigate = useNavigate()

  const submitHandler = (event) => {
    event.preventDefault()
    
    console.log("search phrase is : " + JSON.stringify(searchPhrase))
    navigate(`/search/${searchPhrase}`)
  }

  return (
    
      <form className={styles.container} onSubmit={submitHandler}>
        <FiSearch className={focus ? styles.focus : styles.searchFont} />
        <input 
          type="search" 
          name="srch" 
          id="srch" 
          onFocus={searchFocus}
          onBlur={()=>setFocus(false)} 
          onChange={(e)=>{setSearchPhrase(e.target.value)}} placeholder='Search Posts' />
      </form>
       
    
  )
}
