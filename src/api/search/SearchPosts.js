import React from 'react'
import { useParams } from 'react-router-dom'


const SearchPosts = (props) => {

    const {value} = useParams()
    console.log('search value: ' + JSON.stringify(value));
    
    const url = `https://www.reddit.com/search.json?q=${value}&restrict_sr=on&include_over_18=on&sort=relevance&t=all`
    //use Navigate to redirect pages



}

export default SearchPosts