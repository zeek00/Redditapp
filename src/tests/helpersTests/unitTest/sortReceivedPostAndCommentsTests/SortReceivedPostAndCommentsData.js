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
                        "replies": "",
                        "id": "1",
                        "author": "1",
                        "created_utc": 1,
                        "body": "1",
                        "name": "1",
                        "downs": 0,
                        "created": 1,
                        "subreddit_name_prefixed": "1",
                        "ups": 1
                    }
                }]
        }
    },
    replyCommentWithEmptyRepliesFieldToReturn: {
        id: "0",
        author: "0",
        downs: 0,
        ups: 0,
        body: "0",
        subreddit_name_prefixed: "0",
        createdUTC: 0,
        moreReplies: [],
        replies: [
            {
                id: "1",
                author: "1",
                downs: 0,
                ups: 1,
                body: "1",
                subreddit_name_prefixed: "1",
                createdUTC: 1,
                replies: [],
                moreReplies: []
            },
        ],
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
    },
    commentInRepliesDataMissingUps: {
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
                        "subreddit_name_prefixed": "r/clevercomebacks"
                    }
                }]
        }
    },

}




export const sortCommentNestedRepliesTestsDataOneObj = {
    replyComments:
        {
            Replies1Obj2EmptyStrNotValidUpsMissing: {
                "kind": "Listing",
                "data": {
                    "children": [
                        {
                            "kind": "t1",
                            "data": {
                                "subreddit_id": "1",
                                "subreddit": "1",
                                "replies": {
                                    "kind": "Listing",
                                    "data": {
                                        "children": [
                                            {
                                                "kind": "t1",
                                                "data": {
                                                    "subreddit_id": "2",
                                                    "subreddit": "2",
                                                    "replies": "",
                                                    "id": "2",
                                                    "author": "2",
                                                    "created_utc": 2,
                                                    "parent_id": "1",
                                                    "score": 2,
                                                    "author_fullname": "2",
                                                    "body": "2",
                                                    "name": "2",
                                                    "downs": 0,
                                                    "link_id": "2",
                                                    "created": 2,
                                                    "subreddit_name_prefixed": "2",
                                                    "ups": 2
                                                }
                                            }]
                                    }
                                },
                                "id": "1",
                                "author": "1",
                                "created_utc": 1,
                                "parent_id": "1",
                                "score": 1,
                                "author_fullname": "1",
                                "body": "1",
                                "name": "1",
                                "downs": 0,
                                "link_id": "1",
                                "created": 1,
                                "subreddit_name_prefixed": "1"
                            }
                        }]
                }
            },
            Replies1Obj2EmptyStrValid: {
                "kind": "Listing",
                "data": {
                    "children": [
                        {
                            "kind": "t1",
                            "data": {
                                "subreddit_id": "1",
                                "subreddit": "1",
                                "replies": {
                                    "kind": "Listing",
                                    "data": {
                                        "children": [
                                            {
                                                "kind": "t1",
                                                "data": {
                                                    "subreddit_id": "2",
                                                    "subreddit": "2",
                                                    "replies": "",
                                                    "id": "2",
                                                    "author": "2",
                                                    "created_utc": 2,
                                                    "parent_id": "1",
                                                    "score": 2,
                                                    "author_fullname": "2",
                                                    "body": "2",
                                                    "name": "2",
                                                    "downs": 0,
                                                    "link_id": "2",
                                                    "created": 2,
                                                    "subreddit_name_prefixed": "2",
                                                    "ups": 2
                                                }
                                            }]
                                    }
                                },
                                "id": "1",
                                "author": "1",
                                "created_utc": 1,
                                "parent_id": "1",
                                "score": 1,
                                "author_fullname": "1",
                                "body": "1",
                                "name": "1",
                                "downs": 0,
                                "link_id": "1",
                                "created": 1,
                                "subreddit_name_prefixed": "1",
                                "ups": 1
                            }
                        }]
                }
            }
        },
    validComments:
        {
            Replies1Obj2EmptyStr: {
                main: {
                    id: "0",
                    author: "0",
                    downs: 0,
                    ups: 0,
                    body: "0",
                    subreddit_name_prefixed: "0",
                    createdUTC: 0,
                    replies: [],
                    moreReplies: []
                },
                first: {
                    id: "1",
                    author: "1",
                    downs: 0,
                    ups: 1,
                    body: "1",
                    subreddit_name_prefixed: "1",
                    createdUTC: 1,
                    replies: [],
                    moreReplies: []
                },
                second: {
                    id: "2",
                    author: "2",
                    downs: 0,
                    ups: 2,
                    body: "2",
                    subreddit_name_prefixed: "2",
                    createdUTC: 2,
                    replies: [],
                    moreReplies: []
                },
                third: {
                    id: "3",
                    author: "3",
                    downs: 0,
                    ups: 3,
                    body: "3",
                    subreddit_name_prefixed: "3",
                    createdUTC: 3,
                    replies: [],
                    moreReplies: []
                },


            }

        },
    addedCommentRepliesReturn:
        {
            Replies1Obj2EmptyStrValid:

                {
                    secondInFirstObjReplies:
                        {
                            id: "1",
                            author: "1",
                            downs: 0,
                            ups: 1,
                            body: "1",
                            subreddit_name_prefixed: "1",
                            createdUTC: 1,
                            replies: [
                                {
                                    id: "2",
                                    author: "2",
                                    downs: 0,
                                    ups: 2,
                                    body: "2",
                                    subreddit_name_prefixed: "2",
                                    createdUTC: 2,
                                    replies: [],
                                    moreReplies: []
                                }
                            ],
                            moreReplies: []
                        },
                    fullReplies1Obj2EmptyStrReturn:
                        {
                            id: "0",
                            author: "0",
                            downs: 0,
                            ups: 0,
                            body: "0",
                            subreddit_name_prefixed: "0",
                            createdUTC: 0,
                            replies: [
                                {
                                    id: "1",
                                    author: "1",
                                    downs: 0,
                                    ups: 1,
                                    body: "1",
                                    subreddit_name_prefixed: "1",
                                    createdUTC: 1,
                                    replies: [
                                        {
                                            id: "2",
                                            author: "2",
                                            downs: 0,
                                            ups: 2,
                                            body: "2",
                                            subreddit_name_prefixed: "2",
                                            createdUTC: 2,
                                            replies: [],
                                            moreReplies: []
                                        }
                                    ],
                                    moreReplies: []
                                },
                            ],
                            moreReplies: []
                        }
                }
        }

}


export const sortCommentNestedRepliesTestsDataTwoComments = {
    replyComments:
        {
            Replies1Obj2EmptyStrValid2Comments: {
                "kind": "Listing",
                "data": {
                    "children": [
                        {
                            "kind": "t1",
                            "data": {
                                "subreddit_id": "1",
                                "subreddit": "1",
                                "replies": {
                                    "kind": "Listing",
                                    "data": {
                                        "children": [
                                            {
                                                "kind": "t1",
                                                "data": {
                                                    "subreddit_id": "2",
                                                    "subreddit": "2",
                                                    "replies": "",
                                                    "id": "2",
                                                    "author": "2",
                                                    "created_utc": 2,
                                                    "parent_id": "1",
                                                    "score": 2,
                                                    "author_fullname": "2",
                                                    "body": "2",
                                                    "name": "2",
                                                    "downs": 0,
                                                    "link_id": "2",
                                                    "created": 2,
                                                    "subreddit_name_prefixed": "2",
                                                    "ups": 2
                                                }
                                            }]
                                    }
                                },
                                "id": "1",
                                "author": "1",
                                "created_utc": 1,
                                "parent_id": "1",
                                "score": 1,
                                "author_fullname": "1",
                                "body": "1",
                                "name": "1",
                                "downs": 0,
                                "link_id": "1",
                                "created": 1,
                                "subreddit_name_prefixed": "1",
                                "ups": "1"
                            }
                        },
                        {
                            "kind": "t1",
                            "data": {
                                "subreddit_id": "3",
                                "subreddit": "3",
                                "replies": {
                                    "kind": "Listing",
                                    "data": {
                                        "children": [
                                            {
                                                "kind": "more",
                                                "data": {
                                                    "id": "4",
                                                    "children": [
                                                        "7", "8"
                                                    ]
                                                }
                                            }]
                                    }
                                },
                                "id": "3",
                                "author": "3",
                                "created_utc": 3,
                                "parent_id": "3",
                                "score": 3,
                                "author_fullname": "3",
                                "body": "3",
                                "name": "3",
                                "downs": 0,
                                "link_id": "3",
                                "created": 3,
                                "subreddit_name_prefixed": "3",
                                "ups": "3"
                            }
                        },


                    ]
                }
            },
        },
    addedCommentRepliesReturn:
        {
            Replies2Obj1EmptyStr1mMoreValid:
                {
                    moreInThirdObjMoreReplies:
                        {
                            id: "3",
                            author: "3",
                            downs: 0,
                            ups: 3,
                            body: "3",
                            subreddit_name_prefixed: "3",
                            createdUTC: 3,
                            replies: [
                            ],
                            moreReplies: ["7", "8"]
                        },

                    secondInFirstObjReplies:
                        {
                            id: "1",
                            author: "1",
                            downs: 0,
                            ups: 1,
                            body: "1",
                            subreddit_name_prefixed: "1",
                            createdUTC: 1,
                            replies: [
                                {
                                    id: "2",
                                    author: "2",
                                    downs: 0,
                                    ups: 2,
                                    body: "2",
                                    subreddit_name_prefixed: "2",
                                    createdUTC: 2,
                                    replies: [],
                                    moreReplies: []
                                }
                            ],
                            moreReplies: []
                        },
                    fullReplies2Obj1EmptyStr1MoreReturn:
                        {
                            id: "0",
                            author: "0",
                            downs: 0,
                            ups: 0,
                            body: "0",
                            subreddit_name_prefixed: "0",
                            createdUTC: 0,
                            moreReplies: [],
                            replies: [
                                {
                                    id: "1",
                                    author: "1",
                                    downs: 0,
                                    ups: 1,
                                    body: "1",
                                    subreddit_name_prefixed: "1",
                                    createdUTC: 1,
                                    replies: [
                                        {
                                            id: "2",
                                            author: "2",
                                            downs: 0,
                                            ups: 2,
                                            body: "2",
                                            subreddit_name_prefixed: "2",
                                            createdUTC: 2,
                                            replies: [],
                                            moreReplies: []
                                        }
                                    ],
                                    moreReplies: []
                                },
                                {
                                    id: "3",
                                    author: "3",
                                    downs: 0,
                                    ups: 3,
                                    body: "3",
                                    subreddit_name_prefixed: "3",
                                    createdUTC: 3,
                                    replies: [
                                    ],
                                    moreReplies: ["7", "8"]
                                },
                            ],
                        }
                }
        }
}


export const sortCommentNestedRepliesTestsDataT1AndMore = {
    replyComments:
        {
            Replies1ObjEmptyStrValidT1AndMore: {
                "kind": "Listing",
                "data": {
                    "children": [
                        {
                            "kind": "t1",
                            "data": {
                                "subreddit_id": "1",
                                "subreddit": "1",
                                "replies": {
                                    "kind": "Listing",
                                    "data": {
                                        "children": [
                                            {
                                                "kind": "t1",
                                                "data": {
                                                    "subreddit_id": "2",
                                                    "subreddit": "2",
                                                    "replies": "",
                                                    "id": "2",
                                                    "author": "2",
                                                    "created_utc": 2,
                                                    "parent_id": "1",
                                                    "score": 2,
                                                    "author_fullname": "2",
                                                    "body": "2",
                                                    "name": "2",
                                                    "downs": 0,
                                                    "link_id": "2",
                                                    "created": 2,
                                                    "subreddit_name_prefixed": "2",
                                                    "ups": 2
                                                }
                                            }]
                                    }
                                },
                                "id": "1",
                                "author": "1",
                                "created_utc": 1,
                                "parent_id": "1",
                                "score": 1,
                                "author_fullname": "1",
                                "body": "1",
                                "name": "1",
                                "downs": 0,
                                "link_id": "1",
                                "created": 1,
                                "subreddit_name_prefixed": "1",
                                "ups": "1"
                            }
                        },
                        {
                            "kind": "more",
                            "data": {
                                "id": "4",
                                "children": [
                                    "7", "8"
                                ]
                            }
                        }]
                }
            },
        },
    addedCommentRepliesReturn:
        {
            Replies1Obj1EmptyStrValid:
                {
                    secondInFirstObjReplies:
                        {
                            id: "1",
                            author: "1",
                            downs: 0,
                            ups: 1,
                            body: "1",
                            subreddit_name_prefixed: "1",
                            createdUTC: 1,
                            replies: [
                                {
                                    id: "2",
                                    author: "2",
                                    downs: 0,
                                    ups: 2,
                                    body: "2",
                                    subreddit_name_prefixed: "2",
                                    createdUTC: 2,
                                    replies: [],
                                    moreReplies: []
                                }
                            ],
                            moreReplies: []
                        },
                    fullReplies2Obj1EmptyStr1MoreReturn:
                        {
                            id: "0",
                            author: "0",
                            downs: 0,
                            ups: 0,
                            body: "0",
                            subreddit_name_prefixed: "0",
                            createdUTC: 0,
                            moreReplies: ["7", "8"],
                            replies: [
                                {
                                    id: "1",
                                    author: "1",
                                    downs: 0,
                                    ups: 1,
                                    body: "1",
                                    subreddit_name_prefixed: "1",
                                    createdUTC: 1,
                                    replies: [
                                        {
                                            id: "2",
                                            author: "2",
                                            downs: 0,
                                            ups: 2,
                                            body: "2",
                                            subreddit_name_prefixed: "2",
                                            createdUTC: 2,
                                            replies: [],
                                            moreReplies: []
                                        }
                                    ],
                                    moreReplies: []
                                },
                            ],
                        }
                }
        }
}



export const sortCommentNestedRepliesTestsDataT1AndNotValidAndT3 = {
    replyComments:
        {
            Replies1ObjEmptyStrValidT1AndNotValidMissingUpsAndT3: {
                "kind": "Listing",
                "data": {
                    "children": [
                        {
                            "kind": "t1",
                            "data": {
                                "subreddit_id": "1",
                                "subreddit": "1",
                                "replies": {
                                    "kind": "Listing",
                                    "data": {
                                        "children": [
                                            {
                                                "kind": "t1",
                                                "data": {
                                                    "subreddit_id": "2",
                                                    "subreddit": "2",
                                                    "replies": "",
                                                    "id": "2",
                                                    "author": "2",
                                                    "created_utc": 2,
                                                    "parent_id": "1",
                                                    "score": 2,
                                                    "author_fullname": "2",
                                                    "body": "2",
                                                    "name": "2",
                                                    "downs": 0,
                                                    "link_id": "2",
                                                    "created": 2,
                                                    "subreddit_name_prefixed": "2",
                                                    "ups": 2
                                                }
                                            }]
                                    }
                                },
                                "id": "1",
                                "author": "1",
                                "created_utc": 1,
                                "parent_id": "1",
                                "score": 1,
                                "author_fullname": "1",
                                "body": "1",
                                "name": "1",
                                "downs": 0,
                                "link_id": "1",
                                "created": 1,
                                "subreddit_name_prefixed": "1",
                                "ups": "1"
                            }
                        },
                        {
                            "kind": "t1",
                            "data": {
                                "subreddit_id": "3",
                                "subreddit": "3",
                                "replies": "",
                                "id": "3",
                                "author": "3",
                                "created_utc": 3,
                                "parent_id": "3",
                                "score": 3,
                                "author_fullname": "3",
                                "body": "3",
                                "name": "3",
                                "downs": 0,
                                "link_id": "3",
                                "created": 3,
                                "subreddit_name_prefixed": "3",
                            }
                        },
                        {
                            "kind": "t3",
                            "data": {
                                "subreddit_id": "4",
                                "subreddit": "4",
                                "replies": "",
                                "id": "4",
                                "author": "4",
                                "created_utc": 4,
                                "parent_id": "4",
                                "score": 4,
                                "author_fullname": "4",
                                "body": "4",
                                "name": "4",
                                "downs": 0,
                                "link_id": "4",
                                "created": 4,
                                "subreddit_name_prefixed": "4",
                            }
                        },]
                }
            },
        },
    addedCommentRepliesReturn:
        {
            Replies1Obj1EmptyStrValid:
                {
                    secondInFirstObjReplies:
                        {
                            id: "1",
                            author: "1",
                            downs: 0,
                            ups: 1,
                            body: "1",
                            subreddit_name_prefixed: "1",
                            createdUTC: 1,
                            replies: [
                                {
                                    id: "2",
                                    author: "2",
                                    downs: 0,
                                    ups: 2,
                                    body: "2",
                                    subreddit_name_prefixed: "2",
                                    createdUTC: 2,
                                    replies: [],
                                    moreReplies: []
                                }
                            ],
                            moreReplies: []
                        },
                    fullReplies1Obj1EmptyStrReturn:
                        {
                            id: "0",
                            author: "0",
                            downs: 0,
                            ups: 0,
                            body: "0",
                            subreddit_name_prefixed: "0",
                            createdUTC: 0,
                            moreReplies: [],
                            replies: [
                                {
                                    id: "1",
                                    author: "1",
                                    downs: 0,
                                    ups: 1,
                                    body: "1",
                                    subreddit_name_prefixed: "1",
                                    createdUTC: 1,
                                    replies: [
                                        {
                                            id: "2",
                                            author: "2",
                                            downs: 0,
                                            ups: 2,
                                            body: "2",
                                            subreddit_name_prefixed: "2",
                                            createdUTC: 2,
                                            replies: [],
                                            moreReplies: []
                                        }
                                    ],
                                    moreReplies: []
                                },
                            ],
                        }
                }
        }
}

//##############   SortReceivedPostAndCommentsData   #############
export const extraSortReceivedPostAndCommentsData = {
    sortPostResults: {
        oneCorrectPostRes: [
            {subreddit_name_prefixed: "1",
                selftext: "1",
                title: "1",
                score: "1",
                name: "1",
                ups: "1",
                downs: "0",
                imageUrl: "1",
                post_hint: "1",
                id: "1",
                num_comments: "1",
                subreddit_subscribers: "1",
                author: "1"}
        ],


    }
}
export const SortReceivedPostAndCommentsData =
    {
        postComments:
            {
                t3T1RepliesToStr: [
                    {
                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t3",
                                    "data": {
                                        subreddit_name_prefixed: "1",
                                        selftext: "1",
                                        title: "1",
                                        score: "1",
                                        name: "1",
                                        ups: "1",
                                        downs: "1",
                                        preview: {
                                            images: [
                                                {
                                                    source: {
                                                        url: "1",
                                                    }
                                                }]
                                        },

                                        id: "1",
                                        num_comments: "1",
                                        subreddit_subscribers: "1",
                                        author: "1"
                                    }
                                }]
                        }
                    },
                    {
                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t1",
                                    "data": {
                                        "subreddit_id": "1",
                                        "subreddit": "1",
                                        "replies": "",
                                        "id": "1",
                                        "author": "1",
                                        "created_utc": 1,
                                        "parent_id": "1",
                                        "score": 1,
                                        "author_fullname": "1",
                                        "body": "1",
                                        "name": "1",
                                        "downs": 0,
                                        "link_id": "1",
                                        "created": 1,
                                        "subreddit_name_prefixed": "1",
                                        "ups": "1"
                                    }
                                }]
                        }
                    }
                ],
                notValidt3T1RepliesToStr: [
                    {
                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t3",
                                    "data": {
                                        subreddit_name_prefixed: "1",
                                        selftext: "1",
                                        title: "1",
                                        score: "1",
                                        name: "1",
                                        downs: "1",
                                        preview: {
                                            images: [
                                                {
                                                    source: {
                                                        url: "1",
                                                    }
                                                }]
                                        },

                                        id: "1",
                                        num_comments: "1",
                                        subreddit_subscribers: "1",
                                        author: "1"
                                    }
                                }]
                        }
                    },
                    {
                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t1",
                                    "data": {
                                        "subreddit_id": "1",
                                        "subreddit": "1",
                                        "replies": "",
                                        "id": "1",
                                        "author": "1",
                                        "created_utc": 1,
                                        "parent_id": "1",
                                        "score": 1,
                                        "author_fullname": "1",
                                        "body": "1",
                                        "name": "1",
                                        "downs": 0,
                                        "link_id": "1",
                                        "created": 1,
                                        "subreddit_name_prefixed": "1",
                                        "ups": "1"
                                    }
                                }]
                        }
                    }
                ],
                twot3sT1RepliesToStr: [
                    {
                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t3",
                                    "data": {
                                        subreddit_name_prefixed: "1",
                                        selftext: "1",
                                        title: "1",
                                        score: "1",
                                        name: "1",
                                        ups: "1",
                                        downs: "1",
                                        preview: {
                                            images: [
                                                {
                                                    source: {
                                                        url: "1",
                                                    }
                                                }]
                                        },

                                        id: "1",
                                        num_comments: "1",
                                        subreddit_subscribers: "1",
                                        author: "1"
                                    }
                                }]
                        }
                    }, {
                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t3",
                                    "data": {
                                        subreddit_name_prefixed: "2",
                                        selftext: "2",
                                        title: "2",
                                        score: "2",
                                        name: "2",
                                        ups: "2",
                                        downs: "2",
                                        preview: {
                                            images: [
                                                {
                                                    source: {
                                                        url: "2",
                                                    }
                                                }]
                                        },

                                        id: "2",
                                        num_comments: "2",
                                        subreddit_subscribers: "2",
                                        author: "2"
                                    }
                                }]
                        }
                    },
                    {
                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t1",
                                    "data": {
                                        "subreddit_id": "1",
                                        "subreddit": "1",
                                        "replies": "",
                                        "id": "1",
                                        "author": "1",
                                        "created_utc": 1,
                                        "parent_id": "1",
                                        "score": 1,
                                        "author_fullname": "1",
                                        "body": "1",
                                        "name": "1",
                                        "downs": 0,
                                        "link_id": "1",
                                        "created": 1,
                                        "subreddit_name_prefixed": "1",
                                        "ups": "1"
                                    }
                                }]
                        }
                    }
                ],
                t3T1RepliesT1AndItRepliesToStr: [
                    {

                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t3",
                                    "data": {
                                        subreddit_name_prefixed: "1",
                                        selftext: "1",
                                        title: "1",
                                        score: "1",
                                        name: "1",
                                        ups: "1",
                                        downs: "1",
                                        preview: {
                                            images: [
                                                {
                                                    source: {
                                                        url: "1",
                                                    }
                                                }]
                                        },

                                        id: "1",
                                        num_comments: "1",
                                        subreddit_subscribers: "1",
                                        author: "1"
                                    }
                                }]
                        }
                    },
                    {
                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t1",
                                    "data": {
                                        "subreddit_id": "1",
                                        "subreddit": "1",
                                        "replies": {
                                            "kind": "Listing",
                                            "data": {
                                                "children": [
                                                    {
                                                        "kind": "t1",
                                                        "data": {
                                                            "subreddit_id": "2",
                                                            "subreddit": "2",
                                                            "replies": "",
                                                            "id": "2",
                                                            "author": "2",
                                                            "created_utc": 2,
                                                            "parent_id": "1",
                                                            "score": 2,
                                                            "author_fullname": "2",
                                                            "body": "2",
                                                            "name": "2",
                                                            "downs": 0,
                                                            "link_id": "2",
                                                            "created": 2,
                                                            "subreddit_name_prefixed": "2",
                                                            "ups": 2
                                                        }
                                                    }]
                                            }
                                        },
                                        "id": "1",
                                        "author": "1",
                                        "created_utc": 1,
                                        "parent_id": "1",
                                        "score": 1,
                                        "author_fullname": "1",
                                        "body": "1",
                                        "name": "1",
                                        "downs": 0,
                                        "link_id": "1",
                                        "created": 1,
                                        "subreddit_name_prefixed": "1",
                                        "ups": "1"
                                    }
                                }]
                        }
                    }


                ],
                t3TwoCommOneRepliesT1AndItRepliesToStrOtherRepliesMoreC: [
                    {

                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t3",
                                    "data": {
                                        subreddit_name_prefixed: "1",
                                        selftext: "1",
                                        title: "1",
                                        score: "1",
                                        name: "1",
                                        ups: "1",
                                        downs: "1",
                                        preview: {
                                            images: [
                                                {
                                                    source: {
                                                        url: "1",
                                                    }
                                                }]
                                        },

                                        id: "1",
                                        num_comments: "1",
                                        subreddit_subscribers: "1",
                                        author: "1"
                                    }
                                }]
                        }
                    },
                    {
                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t1",
                                    "data": {
                                        "subreddit_id": "1",
                                        "subreddit": "1",
                                        "replies": {
                                            "kind": "Listing",
                                            "data": {
                                                "children": [
                                                    {
                                                        "kind": "t1",
                                                        "data": {
                                                            "subreddit_id": "2",
                                                            "subreddit": "2",
                                                            "replies": "",
                                                            "id": "2",
                                                            "author": "2",
                                                            "created_utc": 2,
                                                            "parent_id": "1",
                                                            "score": 2,
                                                            "author_fullname": "2",
                                                            "body": "2",
                                                            "name": "2",
                                                            "downs": 0,
                                                            "link_id": "2",
                                                            "created": 2,
                                                            "subreddit_name_prefixed": "2",
                                                            "ups": 2
                                                        }
                                                    }]
                                            }
                                        },
                                        "id": "1",
                                        "author": "1",
                                        "created_utc": 1,
                                        "parent_id": "1",
                                        "score": 1,
                                        "author_fullname": "1",
                                        "body": "1",
                                        "name": "1",
                                        "downs": 0,
                                        "link_id": "1",
                                        "created": 1,
                                        "subreddit_name_prefixed": "1",
                                        "ups": "1"
                                    }
                                },
                                {
                                    "kind": "t1",
                                    "data": {
                                        "subreddit_id": "3",
                                        "subreddit": "3",
                                        "replies": {

                                            "kind": "Listing",
                                            "data": {
                                                "children": [

                                                    {
                                                        "kind": "more",
                                                        "data": {
                                                            "id": "4",
                                                            "children": [
                                                                "7", "8"
                                                            ]
                                                        }
                                                    }]}
                                        },
                                        "id": "3",
                                        "author": "3",
                                        "created_utc": 3,
                                        "parent_id": "3",
                                        "score": 1,
                                        "author_fullname": "3",
                                        "body": "3",
                                        "name": "3",
                                        "downs": 0,
                                        "link_id": "3",
                                        "created": 3,
                                        "subreddit_name_prefixed": "3",
                                        "ups": "3"
                                    }
                                }]
                        }
                    },


                ],
                t3TwoCommOneRepliesT1AndItRepliesToStrOtherMoreC:  [
                    {

                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t3",
                                    "data": {
                                        subreddit_name_prefixed: "1",
                                        selftext: "1",
                                        title: "1",
                                        score: "1",
                                        name: "1",
                                        ups: "1",
                                        downs: "1",
                                        preview: {
                                            images: [
                                                {
                                                    source: {
                                                        url: "1",
                                                    }
                                                }]
                                        },

                                        id: "1",
                                        num_comments: "1",
                                        subreddit_subscribers: "1",
                                        author: "1"
                                    }
                                }]
                        }
                    },
                    {
                        "kind": "Listing",
                        "data": {
                            "children": [
                                {
                                    "kind": "t1",
                                    "data": {
                                        "subreddit_id": "1",
                                        "subreddit": "1",
                                        "replies": {
                                            "kind": "Listing",
                                            "data": {
                                                "children": [
                                                    {
                                                        "kind": "t1",
                                                        "data": {
                                                            "subreddit_id": "2",
                                                            "subreddit": "2",
                                                            "replies": "",
                                                            "id": "2",
                                                            "author": "2",
                                                            "created_utc": 2,
                                                            "parent_id": "1",
                                                            "score": 2,
                                                            "author_fullname": "2",
                                                            "body": "2",
                                                            "name": "2",
                                                            "downs": 0,
                                                            "link_id": "2",
                                                            "created": 2,
                                                            "subreddit_name_prefixed": "2",
                                                            "ups": 2
                                                        }
                                                    }]
                                            }
                                        },
                                        "id": "1",
                                        "author": "1",
                                        "created_utc": 1,
                                        "parent_id": "1",
                                        "score": 1,
                                        "author_fullname": "1",
                                        "body": "1",
                                        "name": "1",
                                        "downs": 0,
                                        "link_id": "1",
                                        "created": 1,
                                        "subreddit_name_prefixed": "1",
                                        "ups": "1"
                                    }
                                },
                                {"kind": "more",
                                    "data": {
                                        "id": "4",
                                        "children": [
                                            "7", "8"
                                        ]}}
                            ]
                        }
                    },
                ]
            },
        postAndCommentsResult: {
            t3T1RepliesToStr: [{
                comments: [sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first],
                moreComments: [],
                post: extraSortReceivedPostAndCommentsData.sortPostResults.oneCorrectPostRes
            }],
            t3T1RepliesToObjRepliesToStr: [{
                comments: [sortCommentNestedRepliesTestsDataOneObj.addedCommentRepliesReturn.Replies1Obj2EmptyStrValid.secondInFirstObjReplies],
                moreComments: [],
                post: extraSortReceivedPostAndCommentsData.sortPostResults.oneCorrectPostRes
            }],
            t3TwoCommOneRepliesT1AndItRepliesToStrOtherRepliesMoreC : [{
                comments: [
                    {
                        id: "1",
                        author: "1",
                        downs: 0,
                        ups: 1,
                        body: "1",
                        subreddit_name_prefixed: "1",
                        createdUTC: 1,
                        replies: [
                            {
                                id: "2",
                                author: "2",
                                downs: 0,
                                ups: 2,
                                body: "2",
                                subreddit_name_prefixed: "2",
                                createdUTC: 2,
                                replies: [],
                                moreReplies: []
                            }
                        ],
                        moreReplies: []
                    },
                    {
                        id: "3",
                        author: "3",
                        downs: 0,
                        ups: 3,
                        body: "3",
                        subreddit_name_prefixed: "3",
                        createdUTC: 3,
                        replies: [
                        ],
                        moreReplies: ["7", "8"]
                    },
                ],
                moreComments: [],
                post: extraSortReceivedPostAndCommentsData.sortPostResults.oneCorrectPostRes
            }],
            t3TwoCommOneRepliesT1AndItRepliesToStrOtherMoreC:[{
                comments: [
                    {
                        id: "1",
                        author: "1",
                        downs: 0,
                        ups: 1,
                        body: "1",
                        subreddit_name_prefixed: "1",
                        createdUTC: 1,
                        replies: [
                            {
                                id: "2",
                                author: "2",
                                downs: 0,
                                ups: 2,
                                body: "2",
                                subreddit_name_prefixed: "2",
                                createdUTC: 2,
                                replies: [],
                                moreReplies: []
                            }
                        ],
                        moreReplies: []
                    }
                ],
                moreComments: ["7", "8"],
                post: extraSortReceivedPostAndCommentsData.sortPostResults.oneCorrectPostRes
            }]
            ,


            onePostWithMissingTitleField: [
                {
                    "kind": "t3",
                    "data": {
                        subreddit_name_prefixed: "1",
                        selftext: "1",
                        score: "1",
                        name: "1",
                        ups: "1",
                        downs: "1",
                        preview: {
                            images: [
                                {
                                    source: {
                                        url: "https://preview.redd.it/z1kwwlue1rbb1.png?auto=webp&s=9fd0f0ec02ea4c4529c19ff450bafc45cc09e277",
                                    }
                                }]
                        },
                        id: "id",
                        num_comments: "1",
                        subreddit_subscribers: "1",
                        author: "1",
                    }
                }

            ]
        }

    }


// @@@@@@@@@@@@@
/*  {
        oneCorrectPost: [
            {
                "kind": "t3",
                "data": {
                    subreddit_name_prefixed: "subreddit_name_prefixed",
            selftext: "selftext",
            title: "title",
            score: "score",
            name: "name",
            ups: "ups",
            downs: "downs",
            preview: {
                images: [
                    {source: {
                            url: "https://preview.redd.it/z1kwwlue1rbb1.png?auto=webp&s=9fd0f0ec02ea4c4529c19ff450bafc45cc09e277",
            }}]},
            post_hint: "post_hint",
            id: "id",
            num_comments: "num_comments",
            subreddit_subscribers: "w",
            author: "author",
            extra: "extra"
            }}
        ],
        onePostWithMissingTitleField: [
            {
                "kind": "t3",
                "data": {
                    subreddit_name_prefixed: "subreddit_name_prefixed",
            selftext: "selftext",
            score: "score",
            name: "name",
            ups: "ups",
            downs: "downs",
            preview: {
                images: [
                    {source: {
                        url: "https://preview.redd.it/z1kwwlue1rbb1.png?auto=webp&s=9fd0f0ec02ea4c4529c19ff450bafc45cc09e277",
            }}]},
            post_hint: "post_hint",
            id: "id",
            num_comments: "num_comments",
            subreddit_subscribers: "w",
            author: "author",
            extra: "extra"
            }}

]}*/