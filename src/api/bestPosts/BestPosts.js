

import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addBestPosts } from '../../store/postsSlice';
import Post from '../../components/Posts/Post';
import bestData from './bestDataExample';
import styles from './BestPosts.module.css'
import {changeLoadingState,  changeCompletedState,changeErrorState, changeToInitialState} from '../../store/loadingSlice' 
const {SortReceivedPosts } = require('../../helpers/SortReceivedPosts')

const BestPosts = () => {
    const isLoading = useSelector(state => state.loadingReducer.loading)
    const savedBestPosts = useSelector(state => state.postsReducer.bestPosts)
    const dispatch = useDispatch()

    const [bestPosts, setBestPosts] = useState(savedBestPosts)
    console.log('saved best posts: ' + JSON.stringify(savedBestPosts));
    
    useEffect(()=>{
        if (bestPosts.length === 0){
            getBestPosts()
        }        
    }, [])

    //add raw_json=1 param, otherwise <, >, and & will be replaced with &lt;, &gt;, and &amp;, respectively and wont load images.
    const url = 'https://www.reddit.com/best.json?raw_json=1';
    const headers = {
        "User-Agent": process.env.USER_AGENT
    };

    const getBestPosts = async () => {
      try { 
        dispatch(changeLoadingState({message: "to loading state"}))
       const response = await fetch(url, {headers: headers});

        if(!response.ok){
            dispatch(changeErrorState({message: "to err state"}))
            throw new Error("Request failed with status code: " + response.status);
        }

        const data = await response.json()

        //##### sort with fetched data
        const getSortedReceivedPosts = SortReceivedPosts(data.data.children)

        //####### sort with an example data
        //const getSortedReceivedPosts = SortReceivedPosts(bestData.data.children)

        dispatch(changeCompletedState({message: "to completed state"}))

        setBestPosts(getSortedReceivedPosts)        
        dispatch(addBestPosts(getSortedReceivedPosts))
      
    } catch (error) {
        console.log('This is the error: \n'+ error);
    }
    dispatch(changeToInitialState({message: "to err state"}))
    }
    return <div className={styles.div}>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <ul className={styles.ul}>
            {bestPosts.length > 0 ? bestPosts.map(onePost => {
              return <li key={onePost.id}>
                <Post onPost={onePost}/>
                </li>
}): console.log('no posts')
} 
        </ul>  }
    </div>
};

export default BestPosts