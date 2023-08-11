
import ValidComment from "./ValidComment"

// import SortCommentNestedReplies from "./SortCommentNestedReplies"

export const SortNestedReplies = (commentForRepliesData, addRepliesFieldTo) => {
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

 


//import ValidComment from "./ValidComment"
//import SortReplies from "./SortNestedReplies"

export const SortCommentNestedReplies = (commentInRepliesData, addRepliesFieldTo) => {
   console.log('went to sortCommentNestedReplies');

   for (let q = 0; q < commentInRepliesData.length; q++) {
       // loops through replies

       const currentCommentInRepliesData = commentInRepliesData[q].data
       if (commentInRepliesData[q].kind === "t1") {

           // validate fields and return valid comment if possible
          const getValidComment = ValidComment(currentCommentInRepliesData)
           // console.log('###    #####    ####   getValidComment ' + JSON.stringify(getValidComment));

           if (getValidComment.isValid) {
               //push to valid comments replies field
               addRepliesFieldTo.replies.push(getValidComment.currentComment)

               const newCommentForRepliesData = commentInRepliesData[q].data.replies
               const newAddRepliesFieldTo = getValidComment.currentComment

               SortNestedReplies(newCommentForRepliesData, newAddRepliesFieldTo)

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


