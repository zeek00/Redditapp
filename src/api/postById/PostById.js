import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PostByIdExample from "./postByIdDataExample";
import * as PostAndComments  from "../../helpers/sortReceivedPostAndComments/SortReceivedPostAndComments";
import Comments from "../../components/comments/Comments";
import * as Post from "../../components/Posts/Post";
import { useDispatch, useSelector } from "react-redux";
import {changeLoadingState,  changeCompletedState,changeErrorState, changeToInitialState} from '../../store/loadingSlice' 

const PostById = (props) => {
    const isLoading = useSelector(state => state.loadingReducer.loading)
    const dispatch = useDispatch()

    const [sortedData, setSortedData] = useState([])
    const {id} = useParams()
  
    useEffect(() => {
        if (sortedData.length === 0){
             getDataById(id)
        } 
    }, [id])    
    

    const getDataById = async (postId) => {
        try { 
        const url = `https://www.reddit.com/comments/${postId}.json?raw_json=1`
        dispatch(changeLoadingState({message: "to loading state"}))

        const getDataById = await fetch(url)
        const receivedDataByIdJson = await getDataById.json()
        //console.log('this id ' + JSON.stringify(receivedDataByIdJson));

        if (receivedDataByIdJson.error === 404){
            dispatch(changeErrorState({message: "to err state"}))
            console.log('no posts for this id ' + JSON.stringify(receivedDataByIdJson));  
        }
        else {
            //###### sort data with fetched posts below:
            const sortedReceivedPost = PostAndComments.SortReceivedPostAndComments(receivedDataByIdJson)
            //console.log('###### received sorted data to set ######## ' + JSON.stringify(sortedReceivedPost));

            setSortedData(sortedReceivedPost)

            dispatch(changeCompletedState({message: "to complete state"}))
            
          
        }
        //###### sort data with example below:
        //setSortedData(SortReceivedPostAndComments(PostByIdExample))
        }
        catch(error){
            console.log('err occured in getDataById ' + JSON.stringify(error.message));
            dispatch(changeCompletedState({message: "to complete state"}))

        }
    }


    return <div>
        {isLoading && <p>Loading...</p>}
        {!isLoading && sortedData.length >0 && <div><Post.Post onPost={sortedData[0].post[0]}/>
        <Comments onComments={sortedData[0].comments} onMore={sortedData[0].moreComments}/>
    </div>}
        {!isLoading && sortedData.length === 0 && <p> No post</p>}
    </div>   
}

export default PostById