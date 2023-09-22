export const nestedObjectsdata = {
    validPosts: {
        "kind": "Listing",
        "data": {
            "after": "t3_15fuv4x",
            "children": [
                {
                    "kind": "t3",
                    "data": {
                        "title": "1",
                        "subreddit_id": "1",
                    }
                },

            ]
        },

    },
    validOnePosts: {
        "kind": "Listing",
        "data":
            {
                "title": "1",
                "subreddit_id": "1",
            }
    },
    notValidPosts: {
        "kind": "Listing",
        "data": {
            "kind": "t3",
            "data": {
                "title": "1",
                "subreddit_id": "1",
            }
        },
    },
    validPost3Properties: {
    "kind": "Listing",
        "data": {
        "child":
        {
            "kind": "t3",
            "data": {
            "title": "1",
                "subreddit_id": "1",
        }
        },


    },

},
}

