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

            const getSearchedData = async () => {
                const receivedSearchedData = await SortedSearchData.getSortedSearchedData(dispatch, value)
                console.log("receivedSearchedData " + JSON.stringify(receivedSearchedData))
                if (Array.isArray(receivedSearchedData)) {
                    if (receivedSearchedData.length !== 0) {
                        setSearchedPosts(receivedSearchedData)
                    } else {
                        console.log("receivedSearchedData is an empty array")
                    }
                } else {
                    console.log("receivedSearchedData is not an array")
                }
            }
            if(savedSearchedValue !== value) {
                getSearchedData()
        }
    },[value])
    

    

return <div >
    {isLoading && <p>Loading...</p>}
    {!isLoading && <ul id="srchPosts">
        {searchedPosts.length > 0? searchedPosts.map(onePost => {
            return <li key={onePost.id}>
                {!isLoading &&  console.log("in search posts sending to <post> : " + JSON.stringify(onePost))}
                <Post.Post onPost={onePost}/>
            </li>
        }): <p>Searched posts Empty</p>
        
    }
    </ul>}
</div>
}

export default SearchPosts