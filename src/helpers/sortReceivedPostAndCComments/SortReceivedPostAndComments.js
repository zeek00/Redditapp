//import {SortReceivedPosts} from "../SortReceivedPosts";
import * as ValComment from "./ValidComment";
//const {ValidComment} = require("./ValidComment")
//const {SortReceivedPosts} = require("../SortReceivedPosts")
import * as SortPosts from "../SortReceivedPosts"

//when ever err occurs/ retry, if failed again dispatch to err state/ send to page 404

//should return a message? easier for testing?
export const SortReceivedPostAndComments = (data) => {
    console.log('data in SortReceivedComments ' + JSON.stringify(data));
    const sortedDataList = []
    const sortedData = {
        comments: [],
        moreComments: [],
        post: []
    }

    for (let i = 0; i < data.length; i++) {
        //loops through first level, post or comments
        const oneData = data[i].data.children

        console.log('first loop data  ' + JSON.stringify(oneData));

        // more then 0 comments
        if (oneData.length > 0) {
            if (oneData[0].kind === "t3" && sortedData.post.length === 0 ) {
                const sortedPost = SortPosts.SortReceivedPosts(oneData)
                //console.log('SORTED post @@@@@@@@@@@@@@@@@ ' + JSON.stringify(sortedPost));

                console.log('sortedPost' + JSON.stringify(sortedPost));

                //if not valid, break out of the loop
                if (sortedPost.length === 0){

                    console.log('sortedPost.length === 0' + JSON.stringify(sortedPost));

                    break
                }
                else {
                    console.log('sortedPost.length !== 0' + JSON.stringify(sortedPost));

                    sortedData.post.push(...sortedPost)

                }

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

                            const sortedComment = SortNestedReplies(currentData.data.replies, getValidComment.currentComment)
                            console.log('????? !!!!!! getValidComment.currentComment after SortNestedReplies ' + JSON.stringify(getValidComment.currentComment));

                            if (sortedComment.length !== 0){
                                console.log('sortedComment ' + JSON.stringify(sortedComment));

                                sortedData.comments.push(sortedComment)

                            }
                        }
                        else {
                            console.log('#####  not valid comment #######   ' + JSON.stringify(oneComment));

                        }

                    }
                    else if (currentData.kind === "more") {
                        console.log('?????   #  more comments');

                        if(currentData.data.children.length !== 0){
                            sortedData.moreComments.push(...currentData.data.children)

                        }
                    }
                    else {
                        console.log('curr data kind is not t1 or more');
                    }
                }
            }
            else {
                console.log('data kind is not t1 or t3 ot t3 already exist');

            }
        }
        // 0 comments for this post
        else {
            console.log('no comments for this post');

        }

    }
    console.log('######    sorted post comments ' + JSON.stringify(sortedData));
    sortedDataList.push(sortedData)
    console.log('sorted data list before returning ' + JSON.stringify(sortedDataList));

    return sortedDataList
}



//  #######     SortNestedReplies      #######
export const SortNestedReplies = (commentForRepliesData, addRepliesFieldTo) => {
    //console.log('sortNestedReplies called' + JSON.stringify(commentForRepliesData));
    if (typeof commentForRepliesData === "string") {
        // console.log('replies is a string');
        return addRepliesFieldTo
    }
    else if (typeof commentForRepliesData === "object" &&
        !Array.isArray(commentForRepliesData) &&
        commentForRepliesData !== null) {
        const commentInRepliesData = commentForRepliesData.data.children
        const sortedRepliesToReturn = SortCommentNestedReplies(commentInRepliesData, addRepliesFieldTo)

        return sortedRepliesToReturn
    }
    else {
        console.log('something went wrong, replies is not an obj or a str' + JSON.stringify(commentForRepliesData))
        return addRepliesFieldTo
    }
}

//  #######     SortCommentNestedReplies      #######
export const SortCommentNestedReplies = (commentInRepliesData, addRepliesFieldTo) => {

    let addedCommentRepliesToReturn = addRepliesFieldTo
    //console.log('went to sortCommentNestedReplies');
    if (Array.isArray(commentInRepliesData) && typeof addRepliesFieldTo === "object" &&
        !Array.isArray(addRepliesFieldTo) &&
        addRepliesFieldTo !== null) {

        for (let q = 0; q < commentInRepliesData.length; q++) {
            // loops through replies

            const currentCommentInRepliesData = commentInRepliesData[q].data
            // console.log('?? currentCommentInRepliesData ' + JSON.stringify(currentCommentInRepliesData));

            if (commentInRepliesData[q].kind === "t1") {

                // validate fields and return valid comment if possible
                const getValidComment = ValComment.ValidComment(currentCommentInRepliesData)
                //console.log('###    #####    ####   getValidComment ' + JSON.stringify(getValidComment));

                if (getValidComment.isValid) {
                    //push to valid comments replies field

                    const newCommentForRepliesData = commentInRepliesData[q].data.replies
                    const newAddRepliesFieldTo = getValidComment.currentComment

                    const sortedComment = SortNestedReplies(newCommentForRepliesData, newAddRepliesFieldTo)
                    addedCommentRepliesToReturn.replies.push(sortedComment)

                }
                else {
                    console.log('#####  not valid reply comment #######   ' + JSON.stringify(currentCommentInRepliesData));

                }
            }
            else if (commentInRepliesData[q].kind === "more") {
                //console.log('*** currentCommentInRepliesData.children ' + JSON.stringify(currentCommentInRepliesData.children));

                addedCommentRepliesToReturn.moreReplies.push(...currentCommentInRepliesData.children)
            }
            else {
                console.log('comment replies data kind is not t1 or more it is: ');
            }
        }
    }
    else {
        console.log("in SortCommentNestedReplies(), commentInRepliesData must be a list, but received " + JSON.stringify(commentInRepliesData));

        throw new Error("in SortCommentNestedReplies(), commentInRepliesData must be a list, but received " + JSON.stringify(commentInRepliesData))

    }
    //console.log('~~~ before returning addedCommentRepliesToReturn' + JSON.stringify(addedCommentRepliesToReturn));

    return addRepliesFieldTo

}



