import { SortReceivedPosts } from "./SortReceivedPosts";
import SortNestedReplies from "./sortReceivedPostAndCComments/SortNestedReplies";


export const SortReceivedPostAndComments = (data) => {
   //console.log('data in SortReceivedComments ' + JSON.stringify(data));
    const sortedDataList = []
    const sortedData = {
        comments: [],
        moreComments: []
    }
    
    for (let i=0;i < data.length;i++){
        //loops through first level, post or comments
        const oneData = data[i].data.children

        if (oneData[0].kind === "t3"){
            const sortedPost = SortReceivedPosts(oneData)
            sortedData["post"] = sortedPost
        }
        else if (oneData[0].kind === "t1"){
                        
            for (let z=0;z < oneData.length;z++){
                //loops through second level,receiving all top layer comments
 
                const currentData = oneData[z]
                const oneComment = currentData.data

                if (currentData.kind === "t1") {
                    //console.log('data #### ' + JSON.stringify(currentData.data));
                    
                    const currentComment = {
                    id: oneComment.id,
                    author: oneComment.author,
                    createdUTC: oneComment.createdUTC,
                    downs: oneComment.downs,
                    ups: oneComment.ups,
                    body: oneComment.body,
                    replies: [],
                    moreReplies: []
                    }

                    SortNestedReplies(currentData, currentData.data, currentComment)
                    
                    sortedData.comments.push(currentComment)
                    }
                else if (currentData.kind === "more"){
                    sortedData["moreComments"].push(...currentData.data.children)
                }
                else {
                    console.log('curr data kind is not t1 or more');
                }
            }
            }         
        else {
            console.log('data kind is not t1 or t3');
            
        }
    }
    console.log('######    sorted post comments ' + JSON.stringify(sortedData));
    sortedDataList.push(sortedData)
    return sortedDataList
}

