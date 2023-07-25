export const SortReceivedPosts = (posts) => {
  
    const sortedPosts = posts.map(onePost => {
        console.log('images: ' + JSON.stringify(onePost.data.preview.images[0].source.url));
        
        const sortedPost = {
            subreddit: onePost.data.subreddit,
            title: onePost.data.title,
            score: onePost.data.score,
            name: onePost.data.name,
            ups: onePost.data.ups,
            downs: onePost.data.downs,
            imageUrl: onePost.data.preview.images[0].source.url,
            post_hint: onePost.data.post_hint,
            subbreddit_subscribers: onePost.data.subbreddit_subscribers,
            id: onePost.data.id,
            num_comments: onePost.data.num_comments,
            author: onePost.data.author
        }
        console.log('sorted post: ' + JSON.stringify(sortedPost));
        
    })
    console.log('sorted posts: ' + JSON.stringify(sortedPosts));
    
    return sortedPosts
}