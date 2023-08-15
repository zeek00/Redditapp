//import {SortReceivedPosts} from "../SortReceivedPosts";
import * as ValComment from "./ValidComment";
//const {ValidComment} = require("./ValidComment")
//const {SortReceivedPosts} = require("../SortReceivedPosts")
import * as SortPosts from "../SortReceivedPosts"


//should return a message? easier for testing?
 export const SortReceivedPostAndComments = (data) => {
    console.log('data in SortReceivedComments ' + JSON.stringify(data));
    const sortedDataList = []
    const sortedData = {
        comments: [],
        moreComments: []
    }

    for (let i = 0; i < data.length; i++) {
        //loops through first level, post or comments
        const oneData = data[i].data.children

        // more then 0 comments
        if (oneData.length > 0) {
            if (oneData[0].kind === "t3") {
                const sortedPost = SortPosts.SortReceivedPosts(oneData)
                //console.log('SORTED post @@@@@@@@@@@@@@@@@ ' + JSON.stringify(sortedPost));

                sortedData["post"] = sortedPost
            }
            else if (oneData[0].kind === "t1") {

                for (let z = 0; z < oneData.length; z++) {
                    //loops through second level,receiving all top layer comments

                    const currentData = oneData[z]
                    const oneComment = currentData.data

                    if (currentData.kind === "t1") {
                        //console.log('data #### ' + JSON.stringify(currentData.data));

                        // validate fields and return valid comment if possible
                        const getValidComment = ValComment.ValidComment(oneComment)

                        //console.log('getValidComment ' + JSON.stringify(getValidComment));


                        if (getValidComment.isValid) {
                            console.log('?????  getValidComment.currentComment before SortNestedReplies ' + JSON.stringify(getValidComment.currentComment));
                            
                            SortNestedReplies(currentData.data.replies, getValidComment.currentComment)
                            console.log('????? !!!!!! getValidComment.currentComment after SortNestedReplies ' + JSON.stringify(getValidComment.currentComment));

                            sortedData.comments.push(getValidComment.currentComment)
                        }
                        else {
                            console.log('#####  not valid comment #######   ' + JSON.stringify(oneComment));

                        }

                    }
                    else if (currentData.kind === "more") {
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
        // 0 comments for this post
        else {
            console.log('no comments for this post');

        }

    }
    // console.log('######    sorted post comments ' + JSON.stringify(sortedData));
    sortedDataList.push(sortedData)
    return sortedDataList
}



//  #######     SortNestedReplies      ####### 
export const SortNestedReplies = (commentForRepliesData, addRepliesFieldTo) => {
    
    console.log('sortNestedReplies called' + JSON.stringify(commentForRepliesData));

if (typeof commentForRepliesData === "string") {
    // console.log('replies is a string');
}
else if (typeof commentForRepliesData === "object" &&
!Array.isArray(commentForRepliesData) &&
commentForRepliesData !== null) {
    const  commentInRepliesData = commentForRepliesData.data.children
    SortCommentNestedReplies(commentInRepliesData, addRepliesFieldTo)
}
else {
    console.log('something went wrong, replies is not an obj or a str' + JSON.stringify(commentForRepliesData))
}

}

//  #######     SortCommentNestedReplies      ####### 
export const SortCommentNestedReplies = (commentInRepliesData, addRepliesFieldTo) => {
console.log('went to sortCommentNestedReplies');

for (let q = 0; q < commentInRepliesData.length; q++) {
    // loops through replies

    const currentCommentInRepliesData = commentInRepliesData[q].data
    if (commentInRepliesData[q].kind === "t1") {
        console.log('commentInRepliesData[q].kind === "t1"');
        
        // validate fields and return valid comment if possible
       const getValidComment = ValComment.ValidComment(currentCommentInRepliesData)
         console.log('###    #####    ####   getValidComment ' + JSON.stringify(getValidComment));

        if (getValidComment.isValid) {
            //push to valid comments replies field
            addRepliesFieldTo.replies.push(getValidComment.currentComment)

            const newCommentForRepliesData = commentInRepliesData[q].data.replies
            const newAddRepliesFieldTo = getValidComment.currentComment
            
            SortNestedReplies(newCommentForRepliesData, newAddRepliesFieldTo)
            console.log('after called SortNestedReplies');
            
        }
        else {
            console.log('#####  not valid reply comment #######   ' + JSON.stringify(currentCommentInRepliesData));

        }
    }
    else if (commentInRepliesData[q].kind === "more") {
        addRepliesFieldTo.moreReplies.push(currentCommentInRepliesData.children)
    }
    else {
        console.log('comment replies data kind is not t1 or more it is: ');
    }
}
}




