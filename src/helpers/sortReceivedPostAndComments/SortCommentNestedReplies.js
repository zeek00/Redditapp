import * as ValComment from "./ValidComment";
import * as nestedReplies  from "./SortNestedReplies";

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

                    const sortedComment = nestedReplies.SortNestedReplies(newCommentForRepliesData, newAddRepliesFieldTo)
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


