import { SortReceivedPosts } from "./SortReceivedPosts";



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

                    sortNestedReplies(currentData, currentData.data, currentComment)
                    
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







const sortCommentNestedReplies = (commentForReplies,commentInRepliesData,addRepliesFieldTo) => {
    console.log('went to sortCommentNestedReplies');

    for (let q=0;q < commentInRepliesData.length; q++){
        // loops through replies

        const currentCommentInRepliesData = commentInRepliesData[q].data
         if (commentInRepliesData[q].kind === "t1"){

            const repliesComment = {
                id: currentCommentInRepliesData.id,
                author: currentCommentInRepliesData.author,
                createdUTC: currentCommentInRepliesData.createdUTC,
                downs: currentCommentInRepliesData.downs,
                ups: currentCommentInRepliesData.ups,
                body: currentCommentInRepliesData.body,
                replies: [],
                moreReplies: []
                }
                //push to the comments field
                addRepliesFieldTo.replies.push(repliesComment)

             //   console.log('commentForReplies.replies ' + JSON.stringify(commentForReplies.replies));
                
                const newCommentForReplies = commentForReplies.data.replies.data.children[q]
                const newCommentForRepliesData = newCommentForReplies.data
                const newAddRepliesFieldTo = repliesComment

                sortNestedReplies(newCommentForReplies,newCommentForRepliesData, newAddRepliesFieldTo)
        }
        else if (commentInRepliesData[q].kind === "more"){
            addRepliesFieldTo.moreReplies.push(currentCommentInRepliesData.children)
        }
        else {
            console.log('comment replies data kind is not t1 or more it is: ');
        }
    }  
}


const sortNestedReplies = (commentForReplies, commentForRepliesData, addRepliesFieldTo) => {
    //    console.log('sortNestedReplies called' + JSON.stringify(commentForReplies));
        //function sortNestedReplies will keep changing 3 vars below
                  //  let commentForReplies = currentData
                  //  let commentForRepliesData = commentForReplies.data
                   // let addRepliesFieldTo = currentComment
                    console.log('went to sortNestedReplies');
                    
        
        if (typeof commentForRepliesData.replies === "string" ){
            console.log('replies is a string');
        }
        else if (typeof commentForRepliesData.replies === "object"){
            console.log('replies is an obj');
             const commentInReplies = commentForRepliesData.replies
                let commentInRepliesData = commentInReplies.data.children
          //call fnc
          sortCommentNestedReplies(commentForReplies,commentInRepliesData,addRepliesFieldTo)

            commentForRepliesData = commentForReplies.data  
        }
        else {
            console.log('something went wrong, replies is not an obj or a str')
        }
   }