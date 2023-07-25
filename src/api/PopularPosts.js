import { React, useEffect, useState } from 'react'
import { SortReceivedPosts } from '../helpers/SortReceivedPosts';

const PopularPosts = ()=>{
const [popularPosts, setPopularPosts] = useState([])

    useEffect(()=>{
        if (popularPosts.length === 0){
            getPopularPosts()
        }
        
    }, [])

    const url = 'https://www.reddit.com/r/popular/top.json';
    const client_secret = process.env.REACT_APP_CLIENT_SECRET
    const client_id = process.env.REACT_APP_CLIENT_ID
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
        setPopularPosts(data.data.children)
        console.log(data.data.children)
        const getSortedReceivedPosts = SortReceivedPosts(data.data.children)
        
    } catch (error) {
        console.log('This is the error: \n'+ error);
    }
    }
    

};

export default PopularPosts