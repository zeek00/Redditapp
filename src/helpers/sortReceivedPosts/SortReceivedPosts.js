export const SortReceivedPosts =  (posts) => {
 console.log('went to sort data' + JSON.stringify(posts));
  
   
    let sortedPostsList = [] 

    if (posts.length > 0) {
         for (let i=0; i < posts.length; i++){
        //console.log('one post: ' + JSON.stringify(posts[i]));

        const post = posts[i].data
        const postKeys = Object.keys(post)
       console.log('Post keys: ' + JSON.stringify(postKeys));
             console.log('Post id SortReceivedPosts: ' + JSON.stringify( post.id));

             if (
        postKeys.includes("subreddit_name_prefixed") &&
        postKeys.includes("selftext") &&
        postKeys.includes("title") &&
        postKeys.includes("score") &&
        postKeys.includes("name") &&
        postKeys.includes("ups") &&
        postKeys.includes("downs") &&
        postKeys.includes("preview") &&
        postKeys.includes("post_hint") &&
        postKeys.includes("id") &&
        postKeys.includes("num_comments") &&
        postKeys.includes("subreddit_subscribers") &&
        postKeys.includes("author") 
        
        ){
            const sortedPost = {
            subreddit_name_prefixed: post.subreddit_name_prefixed,
            selftext: post.selftext,
            title: post.title,
            score: post.score,
            name: post.name,
            ups: post.ups,
            downs: post.downs,
            imageUrl: post.preview.images[0].source.url,
            post_hint: post.post_hint,
            subreddit_subscribers: post.subreddit_subscribers,
            id: post.id,
            num_comments: post.num_comments,
            author: post.author,
           
        }
        sortedPostsList.push(sortedPost)

       


    }

    
}
    }
   
//console.log('#####sorted data: #####' + JSON.stringify(sortedPostsList));

    return sortedPostsList
}


