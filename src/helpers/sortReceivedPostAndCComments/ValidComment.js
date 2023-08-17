export const ValidComment = (commentToValidate) => {

    const commentKeys = Object.keys(commentToValidate)
    console.log('%%% commentToValidate: ' + JSON.stringify(commentToValidate));

    console.log('comment keys: ' + JSON.stringify(commentKeys));
    if (commentKeys.length !== 0) {

        if (commentKeys.includes("id") &&
            commentKeys.includes("author") &&
            commentKeys.includes("downs") &&
            commentKeys.includes("ups") &&
            commentKeys.includes("body") &&
            commentKeys.includes("replies") &&
            commentKeys.includes("subreddit_name_prefixed") &&
            commentKeys.includes("subreddit") &&
            (commentKeys.includes("createdUTC") || commentKeys.includes("created_utc"))
        ) {
          //  console.log('correct');

            const currentComment = {
                id: commentToValidate.id,
                author: commentToValidate.author,
                downs: commentToValidate.downs,
                ups: commentToValidate.ups,
                body: commentToValidate.body,
                subreddit_name_prefixed: commentToValidate.subreddit_name_prefixed,
                replies: [],
                moreReplies: []
            }
            if (commentKeys.includes("createdUTC")){
                currentComment["createdUTC"] = commentToValidate.createdUTC
            }
            else if (commentKeys.includes("created_utc")){
                currentComment["createdUTC"] = commentToValidate.created_utc
            }
            else {
                console.log('current comment suppose to include createdUTC or created_utc after passing if statement, but it does not');
                
            }
            //  console.log('curr comment: ' + JSON.stringify(currentComment));

            return {
                isValid: true,
                currentComment
            }


        }
        else {
            console.log('not valid com outer else');
        return { isValid: false }
        }
    }

    else {
        console.log('not valid com outer else');
        return { isValid: false }
    }
}


