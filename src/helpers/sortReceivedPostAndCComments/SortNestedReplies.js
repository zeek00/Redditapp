import SortCommentNestedReplies from "./SortCommentNestedReplies"

 const SortNestedReplies = (commentForRepliesData, addRepliesFieldTo) => {
    //    console.log('sortNestedReplies called' + JSON.stringify(commentForReplies));
    //function sortNestedReplies will keep changing 3 vars below
    //  let commentForReplies = currentData
    //  let commentForRepliesData = commentForReplies.data
    // let addRepliesFieldTo = currentComment

    //console.log('went to sortNestedReplies');


    if (typeof commentForRepliesData === "string") {
        // console.log('replies is a string');
    }
    else if (typeof commentForRepliesData === "object") {
        // console.log('replies is an obj');
       
        const  commentInRepliesData = commentForRepliesData.data.children
        //call fnc
       SortCommentNestedReplies(commentInRepliesData, addRepliesFieldTo)

    }
    else {
        console.log('something went wrong, replies is not an obj or a str' + JSON.stringify(commentForRepliesData))
    }
}

export default SortNestedReplies
