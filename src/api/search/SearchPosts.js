import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import * as Post from '../../components/Posts/Post'
import { useDispatch, useSelector } from 'react-redux'
import * as SortedSearchData from './getSortedSearchedData'
import * as selectors from '../../store/selectors'
const SearchPosts = (props) => {
    const isLoading = useSelector(selectors.loadingSelector)
    const savedSearchedValue = useSelector(selectors.savedSearchedValue)
    const savedSearchedPosts = useSelector(selectors.savedSearchedPosts)

    const {value} = useParams()
    const [searchedPosts, setSearchedPosts] = useState(savedSearchedPosts)
    
    const dispatch = useDispatch()
    console.log('search value: ' + JSON.stringify(value));
    
    useEffect(() => { 
        if(savedSearchedValue !== value) {
            const receivedSearchedData = SortedSearchData.getSortedSearchedData(dispatch,value)
            if (Array.isArray(receivedSearchedData)){
                if (receivedSearchedData.length !== 0){
                    setSearchedPosts(receivedSearchedData)
                }
                else {
                    console.log("receivedSearchedData is an empty array")
                }
            }
            else {
                console.log("receivedSearchedData is not an array")
            }
        }
    },[value])
    

    

return <div>
    {isLoading && <p>Loading...</p>}
    {!isLoading && <ul>
        {searchedPosts.length > 0? searchedPosts.map(onePost => {
            return <li key={onePost.id}>
                <Post.Post onPost={onePost}/>
            </li>
        }): console.log('no searched posts')
        
    }
    </ul>}
</div>
}

export default SearchPosts