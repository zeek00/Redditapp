import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PostByIdExample from "./postByIdDataExample";
import { SortReceivedPostAndComments } from "../../helpers/SortReceivedPostAndComments";
import Comments from "../../components/comments/Comments";
import Post from "../../components/Posts/Post";
import { useDispatch, useSelector } from "react-redux";
import { addCurrPostById, addCurrPostId } from "../../store/postsSlice";

const PostById = (props) => {
    const dispatch = useDispatch()
    const savedCurrPostId = useSelector(state => state.postsReducer.currPostId)
    const savedCurrPostById = useSelector(state => state.postsReducer.currPostById)

    const [sortedData, setSortedData] = useState(savedCurrPostById)
    const {id} = useParams()
  
    useEffect(() => {
        if (savedCurrPostId !== id){
             getDataById(id)
        } 
    }, [id])    
    

    const getDataById = async (postId) => {
        try {
        const url = `https://www.reddit.com/comments/${postId}.json?raw_json=1`

        const getDataById = await fetch(url)
        const receivedDataByIdJson = await getDataById.json()
        //console.log('this id ' + JSON.stringify(receivedDataByIdJson));

        if (receivedDataByIdJson.error === 404){
            console.log('no posts for this id ' + JSON.stringify(receivedDataByIdJson));  
        }
        else {
            const sortedReceivedPost = SortReceivedPostAndComments(receivedDataByIdJson)
            setSortedData(sortedReceivedPost)
            dispatch(addCurrPostId(postId))
            dispatch(addCurrPostById(sortedReceivedPost))   
        }
        //example below:
        //setSortedData(SortReceivedPostAndComments(PostByIdExample))
        }
        catch(error){
            console.log('err occured in getDataById ' + JSON.stringify(error.message));
        }
    }


    return <div>
       {sortedData.length >0 ? <div><Post onPost={sortedData[0].post[0]}/>
        <Comments onComments={sortedData[0].comments} onMore={sortedData[0].moreComments}/>
    </div>: <p>No posts found</p>}
    </div>
        
}

export default PostById