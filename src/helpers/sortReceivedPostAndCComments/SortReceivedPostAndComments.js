import { SortReceivedPosts } from "../SortReceivedPosts";
import ValidComment from "./ValidComment";
// import SortNestedReplies from "./SortNestedReplies";

//should return a message? easier for testing?
 const SortReceivedPostAndComments = (data) => {
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
                const sortedPost = SortReceivedPosts(oneData)
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
                        const getValidComment = ValidComment(oneComment)

                        //console.log('getValidComment ' + JSON.stringify(getValidComment));


                        if (getValidComment.isValid) {
                            // SortNestedReplies(currentData.data.replies, getValidComment.currentComment)

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




export default SortReceivedPostAndComments


