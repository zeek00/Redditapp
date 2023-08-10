import { React, useEffect, useState } from 'react'
import { SortReceivedPosts } from '../../helpers/SortReceivedPosts';
import { sortAbout } from '../../helpers/sortAbout';
import { useSelector, useDispatch } from 'react-redux';
import { addPopularPosts} from "../../store/postsSlice"
import Post from '../../components/Posts/Post';
// import data from './popularDataExample';
import styles from './PopularPosts.module.css'



const PopularPosts = ()=>{
    const savedPopularPosts = useSelector(state => state.postsReducer.PopularPosts)
    const dispatch = useDispatch()
    const [popularPosts, setPopularPosts] = useState([])


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

        }catch (error) {
            console.log('This is the error: \n'+ error);
        }
    }

    // const getAbout = async () =>{
    //     const headers = {
    //         "User-Agent": process.env.USER_AGENT
    //     };
    //     console.log('in about')
        
       
    //     for(let i = 0; i<popularPosts.length; i++){
    //         // const authorName = authorLists[i];
    //         const url = `https://www.reddit.com/user/${popularPosts[i].author}/about.json`;
        
    //     try { 
    //         const response  = await fetch(url, {headers: headers});
    //         if(!response.ok){
    //             throw new Error("Request failed with status code: " + response.status);
    //         }
    //         const data = await response.json()
    //         console.log('this is the'+ data)

    //         const getSortedReceivedAuthors = sortAbout(data.data.children)
            
    //         // setAbout(getSortedReceivedAuthors)
    //         dispatch(addAbout(getSortedReceivedAuthors))
            
    
    //     } catch (error) {
    //         console.log('This is the error: \n'+ error);
    //     }
    //     }
        
    // }


    return (
    
        <div className={styles.div}>
            
            <ul className={styles.ul}>
                
                {popularPosts.length > 0 ? popularPosts.map(onePost => {
                    
                    return (
                            <li key={onePost.id}>
                                <Post onPost={onePost} />
                            </li>
                        )

                
                       
                    }): console.log('no posts')
                } 
            </ul>  
        </div>
    );
    

};

export default PopularPosts