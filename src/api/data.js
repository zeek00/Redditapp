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

        console.log(data.data.children[0].data);
    } catch (error) {
        console.log('This is the error: \n'+ error);
    }

};

getData()