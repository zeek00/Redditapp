import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addPopularPosts} from "../../store/postsSlice"
import Post from '../../components/Posts/Post';
import popularDataExample from './popularDataExample';
import styles from './PopularPosts.module.css'
import * as sortPopularPosts from './getPopularPosts'



const PopularPosts = ()=>{
    const isLoading = useSelector(state => state.loadingReducer.loading)
    const savedPopularPosts = useSelector(state => state.postsReducer.popularPosts)
    const dispatch = useDispatch()
    const [popularPosts, setPopularPosts] = useState(savedPopularPosts)

    useEffect(()=>{
           if (popularPosts.length === 0){
       const runGetPopularPosts = async(dispatch) => {
          
            const getSortedReceivedPosts = await sortPopularPosts.getSortedPopularPosts(dispatch)
            if (getSortedReceivedPosts !== null){
                setPopularPosts(getSortedReceivedPosts)   
            dispatch(addPopularPosts(getSortedReceivedPosts))
            }
        }       
           
       runGetPopularPosts(dispatch)
        }  
    }, [popularPosts])

    //add raw_json=1 param, otherwise <, >, and & will be replaced with &lt;, &gt;, and &amp;, respectively and wont load images.
    


    return <div className={styles.div}>
        {isLoading && <p> Loading....</p>}
        { !isLoading && <ul className={styles.ul}>
            
            {popularPosts.length > 0 ? popularPosts.map(onePost => {
              return <li key={onePost.id}>
                <Post onPost={onePost}/>
                </li>
           
}): console.log('no posts')
} 
        </ul>  }
    </div>
    

};

export default PopularPosts