import { React, useEffect, useState } from 'react'
import { SortReceivedPosts } from '../helpers/SortReceivedPosts';
import PopulatePosts from './PopulatePosts';
import { useSelector, useDispatch } from 'react-redux';
import { addPopularPosts } from "../store/postsSlice"
import Post from '../components/Posts/Post';

const PopularPosts = ()=>{
    const savedPopularPosts = useSelector(state => state.postsReducer.PopularPosts)
    const dispatch = useDispatch()
    const [popularPosts, setPopularPosts] = useState([])

    useEffect(()=>{
        
        if (popularPosts.length === 0){
           getPopularPosts()
        }        
    }, [])

    //add raw_json=1 param, otherwise <, >, and & will be replaced with &lt;, &gt;, and &amp;, respectively and wont load images.
    const url = 'https://www.reddit.com/r/popular/top.json?raw_json=1';
    
    const headers = {
        "User-Agent": process.env.USER_AGENT
    };
    const getPopularPosts = async () => {
        try {
        const response = await fetch(url, {headers: headers});

        if(!response.ok){
            throw new Error("Request failed with status code: " + response.status);
        }

        const data = await response.json();
        const getSortedReceivedPosts = SortReceivedPosts(data.data.children)
        
        setPopularPosts(getSortedReceivedPosts)
        dispatch(addPopularPosts(getSortedReceivedPosts))
        
        //console.log('received sorted posts ####  '+ JSON.stringify(getSortedReceivedPosts));

    } catch (error) {
        console.log('This is the error: \n'+ error);
    }
    }
    return <div>
        <ul>
            {popularPosts.length > 0 ? popularPosts.map(onePost => {
                return <PopulatePosts onPost={onePost}/>
}): console.log('no posts')
} 
        </ul>  
    </div>
    

};

export default PopularPosts