
import * as CommentNestedReplies from './SortCommentNestedReplies'

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
        const sortedRepliesToReturn = CommentNestedReplies.SortCommentNestedReplies(commentInRepliesData, addRepliesFieldTo)

        return sortedRepliesToReturn
    }
    else {
        console.log('something went wrong, replies is not an obj or a str' + JSON.stringify(commentForRepliesData))
        return addRepliesFieldTo
    }
}




