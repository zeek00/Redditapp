import { React, useEffect, useState } from 'react'
import { SortReceivedPosts } from '../../helpers/SortReceivedPosts';
import { sortAbout } from '../../helpers/sortAbout';
import { useSelector, useDispatch } from 'react-redux';
import { addPopularPosts} from "../../store/postsSlice"
import Post from '../../components/Posts/Post';
import popularDataExample from './popularDataExample';
import styles from './PopularPosts.module.css'
import {changeLoadingState,  changeCompletedState,changeErrorState, changeToInitialState} from '../../store/loadingSlice' 

const PopularPosts = ()=>{
    const isLoading = useSelector(state => state.loadingReducer.loading)
    const savedPopularPosts = useSelector(state => state.postsReducer.popularPosts)
    const dispatch = useDispatch()
    const [popularPosts, setPopularPosts] = useState(savedPopularPosts)

    useEffect(()=>{
        if (popularPosts.length === 0){
           getPopularPosts()
        //    getAbout()
        }        
    }, [popularPosts])

    //add raw_json=1 param, otherwise <, >, and & will be replaced with &lt;, &gt;, and &amp;, respectively and wont load images.
    const url = 'https://www.reddit.com/r/popular/top.json?raw_json=1';
    const headers = {
        "User-Agent": process.env.USER_AGENT
    }

    const getPopularPosts = async () => {
      try { 
       const response = await fetch(url, {headers: headers});

        dispatch(changeLoadingState({message: "to loading"}))

       if(!response.ok){
          dispatch(changeErrorState({message: "to err"}))
            throw new Error("Request failed with status code: " + response.status);
        }

        const data = await response.json();
     
        //#################sort with real time data
        const getSortedReceivedPosts = SortReceivedPosts(data.data.children)

        //###################sort with example below
       // const getSortedReceivedPosts = SortReceivedPosts(popularDataExample.data.children)

        //console.log('@@@@@ posts data: ' + JSON.stringify(data));
        dispatch(changeCompletedState({message: "to completed"}))

        setPopularPosts(getSortedReceivedPosts)   

        dispatch(addPopularPosts(getSortedReceivedPosts))
        
        //console.log('received sorted posts ####  '+ JSON.stringify(getSortedReceivedPosts));
    } catch (error) {
        console.log('This is the error: \n'+ error);
        dispatch(changeErrorState({message: "to err"}))
    }
    dispatch(changeToInitialState({message: "back to initial state"}))
}
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