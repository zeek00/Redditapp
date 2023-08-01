import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PostByIdExample from "./postByIdDataExample";
import { SortReceivedPostAndComments } from "../../helpers/SortReceivedPostAndComments";
import Comments from "../../components/comments/Comments";
import Post from "../../components/Posts/Post";

const PostById = (props) => {
    const [sortedData, setSortedData] = useState([])
    const {id} = useParams()
    console.log('postbyid' + JSON.stringify(id));
    //get all comments by id, 
    
    useEffect(() => {  
       getDataById(id)
    }, [id])    
    

    const getDataById = async (postId) => {
        try {
             console.log('went to getDataById');
        
        const url = `https://www.reddit.com/comments/${postId}.json?raw_json=1`
        const getDataById = await fetch(url)
        const receivedDataByIdJson = await getDataById.json()
        console.log('this id ' + JSON.stringify(receivedDataByIdJson));

        
        if (receivedDataByIdJson.error === 404){
            console.log('no posts for this id ' + JSON.stringify(receivedDataByIdJson));
            
        }
        else {
            setSortedData(SortReceivedPostAndComments(receivedDataByIdJson))
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