import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Post from '../../components/Posts/Post'
import { SortReceivedPosts } from '../../helpers/SortReceivedPosts'
//import searchData from './searchDataExample'

const SearchPosts = (props) => {
    const {value} = useParams()
    const [searchedPosts, setSearchedPosts] = useState([])

    console.log('search value: ' + JSON.stringify(value));
    
    useEffect(() => {        
            getSortedSearchedData(value)
        
    },[value])
    
    const getSortedSearchedData = async (val) => {
        try {
            const url = `https://www.reddit.com/search.json?q=${val}&restrict_sr=on&include_over_18=on&sort=relevance&t=all&raw_json=1`
            
        const response = await fetch(url)
        const searchData = await response.json()
        const sortedData = SortReceivedPosts(searchData.data.children)
        console.log('sorted data: ' + JSON.stringify(sortedData));
        setSearchedPosts(sortedData)
        }
        catch(err){
        console.log('err occured: ' + JSON.stringify(err.message));
        }
    }
    

return <div>
    <ul>
        {searchedPosts.length > 0? searchedPosts.map(onePost => {
            return <li key={onePost.id}>
                <Post onPost={onePost}/>
            </li>
        }): console.log('no searched posts')
        
    }
    </ul>
</div>
}

export default SearchPosts