import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addPopularPosts} from "../../store/postsSlice"
import * as Post from '../../components/Posts/Post';
import popularDataExample from './popularDataExample';
import styles from './PopularPosts.module.css'
import * as sortPopularPosts from './getPopularPosts'
import * as selectors from '../../store/selectors'


const PopularPosts = ()=>{
    const isLoading = useSelector(selectors.loadingSelector)
    const savedPopularPosts = useSelector(selectors.popularPostsSelector)
    const dispatch = useDispatch()
    const [popularPosts, setPopularPosts] = useState(savedPopularPosts)

    useEffect(()=>{
        if (popularPosts.length === 0){
            const runGetPopularPosts = async(dispatch) => {

                const getSortedReceivedPosts = await sortPopularPosts.getPopularPosts(dispatch)
                if (getSortedReceivedPosts !== null && getSortedReceivedPosts.length !== 0 && getSortedReceivedPosts !== undefined
                && Array.isArray(getSortedReceivedPosts)){
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
                    <Post.Post onPost={onePost}/>
                </li>

            }): console.log('no posts')
            }
        </ul>  }
    </div>


};

export default PopularPosts