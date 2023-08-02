

import { React, useEffect, useState } from 'react'
import { SortReceivedPosts } from '../../helpers/SortReceivedPosts'; 
import { useSelector, useDispatch } from 'react-redux';
import { addBestPosts } from '../../store/postsSlice';
import Post from '../../components/Posts/Post';
//import bestData from './bestDataExample';

const BestPosts = () =>{
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
       const response = await fetch(url, {headers: headers});

        if(!response.ok){
            throw new Error("Request failed with status code: " + response.status);
        }
        const data = await response.json()

        const getSortedReceivedPosts = SortReceivedPosts(data.data.children)
    
        setBestPosts(getSortedReceivedPosts)        
        dispatch(addBestPosts(getSortedReceivedPosts))
      
    } catch (error) {
        console.log('This is the error: \n'+ error);
    }
    }
    return <div>
        <ul>
            
            {bestPosts.length > 0 ? bestPosts.map(onePost => {
              return <li key={onePost.id}>
                <Post onPost={onePost}/>
                </li>
           
}): console.log('no posts')
} 
        </ul>  
    </div>
    

};

export default BestPosts