export const validCommentData = {
    commentWithCorrectFields: {
        id: "w",
        author: "author",
        downs: "downs",
        ups: "ups",
        body: "commentWithCorrectFields",
        replies: "",
        subreddit_name_prefixed: "subreddit_name_prefixed",
        subreddit: "subreddit",
        createdUTC: "created utc date",
        created_utc: "created utc date"
    },
    commentWithCreatedUTCFieldMissing: {
        id: "1",
        author: "author",
        downs: "downs",
        ups: "ups",
        body: "commentWithUpsFieldMissing",
        replies: "",
        subreddit_name_prefixed: "subreddit_name_prefixed",
        subreddit: "subreddit",

    }

}


export const commentInRepliesData = {
    replyCommentWithEmptyRepliesField: {
        "kind": "Listing",
        "data": {
            "children": [
                {
                    "kind": "t1",
                    "data": {
                        "subreddit_id": "t5_dyqlw",
                        "subreddit": "clevercomebacks",
                        "replies": "",
                        "id": "jtdy6g4",
                        "author": "StinkyMcFartBalls",
                        "created_utc": 1690294670.0,
                        "parent_id": "t1_jtcy1tw",
                        "score": 22,
                        "author_fullname": "t2_q8cqh47d",
                        "body": "Threw me off for a second",
                        "name": "t1_jtdy6g4",
                        "downs": 0,
                        "link_id": "t3_159056w",
                        "created": 1690294670.0,
                        "subreddit_name_prefixed": "r/clevercomebacks",
                        "ups": 22
                    }
                }]
        }
    },
    addRepliesFieldTo: {
        id: "id",
        author: "author",
        downs: "downs",
        ups: "ups",
        body: "body",
        subreddit_name_prefixed: "subreddit_name_prefixed",
        replies: [],
        moreReplies: []
    },
    replyCommentWithObjField: {
            "kind": "Listing",
            "data": {
                "children": [
                    {
                        "kind": "t1",
                        "data": {
                            "subreddit_id": "t5_dyqlw",
                            "subreddit": "clevercomebacks",
                            "replies": {
                                    "kind": "Listing",
                                    "data": {
                                        "children": [
                                            {
                                                "kind": "t1",
                                                "data": {
                                                    "subreddit_id": "t5_dyqlw",
                                                    "subreddit": "clevercomebacks",
                                                    "replies": "",
                                                    "id": "jtdy6g4",
                                                    "author": "StinkyMcFartBalls",
                                                    "created_utc": 1690294670.0,
                                                    "parent_id": "t1_jtcy1tw",
                                                    "score": 22,
                                                    "author_fullname": "t2_q8cqh47d",
                                                    "body": "Threw me off for a second",
                                                    "name": "t1_jtdy6g4",
                                                    "downs": 0,
                                                    "link_id": "t3_159056w",
                                                    "created": 1690294670.0,
                                                    "subreddit_name_prefixed": "r/clevercomebacks",
                                                    "ups": 22
                                                }
                                            }]
                                    }
                            },
                            "id": "jtdy6g4",
                            "author": "StinkyMcFartBalls",
                            "created_utc": 1690294670.0,
                            "parent_id": "t1_jtcy1tw",
                            "score": 22,
                            "author_fullname": "t2_q8cqh47d",
                            "body": "Threw me off for a second",
                            "name": "t1_jtdy6g4",
                            "downs": 0,
                            "link_id": "t3_159056w",
                            "created": 1690294670.0,
                            "subreddit_name_prefixed": "r/clevercomebacks",
                            "ups": 22
                        }
                    }]
            }
    }

}