require('dotenv').config();

//api keys
const client_secret = process.env.CLIENT_SECRET
const client_id = process.env.CLIENT_ID
//url to fetch data from
const url = 'https://www.reddit.com/r/popular/top.json';
//headers
const headers = {
    "User-Agent": process.env.USER_AGENT
};
// authentication
const authParams = new URLSearchParams({
    client_id: client_id,
    client_secret: client_secret,
});
//concatenating authentications with url
const urlWithParams = `${url}?${authParams.toString()}`;

const getData = async ()=>{
    try {
        const response = await fetch(urlWithParams, {headers: headers});
        if(!response.ok){
            throw new Error("Request failed with status code: " + response.status);
        }
        const data = await response.json();
       return  data.data.children
        
    } catch (error) {
        console.log('This is the error: \n'+ error);
    }

};

  
const sortData = async ()=>{
    const bigData = await getData()
    bigData.map(onePost => {
        
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
        return sortedPost
        console.log('sorted post: ' + JSON.stringify(sortedPost));
        
    })
};


const data = sortData();
console.log(data)