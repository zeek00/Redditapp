import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Post from '../../components/Posts/Post'
import { SortReceivedPosts } from '../../helpers/SortReceivedPosts'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrSearchValue, addCurrSearchPosts } from '../../store/postsSlice'
import searchData from './searchDataExample'
import {changeLoadingState,  changeCompletedState,changeErrorState, changeToInitialState} from '../../store/loadingSlice' 

const SearchPosts = (props) => {
    const isLoading = useSelector(state => state.loadingReducer.loading)
    const savedSearchedValue = useSelector(state => state.postsReducer.currSearchValue)
    const savedSearchedPosts = useSelector(state => state.postsReducer.currSearchPosts)

    const {value} = useParams()
    const [searchedPosts, setSearchedPosts] = useState(savedSearchedPosts)
    
    const dispatch = useDispatch()
    console.log('search value: ' + JSON.stringify(value));
    
    useEffect(() => { 
        if(savedSearchedValue !== value) {
            getSortedSearchedData(value)
        }      
    },[value])
    
    const getSortedSearchedData = async (val) => {
        try {
            const url = `https://www.reddit.com/search.json?q=${val}&restrict_sr=on&include_over_18=on&sort=relevance&t=all&raw_json=1`
        
        dispatch(changeLoadingState({message: "to loading"}))

        const response = await fetch(url)
        const searchedData = await response.json()
        
        //#########sorting with fetched data
        const sortedData = SortReceivedPosts(searchedData.data.children)

        //#########sorting with example data
        //const sortedData = SortReceivedPosts(searchData.data.children)

        //console.log('sorted data: ' + JSON.stringify(sortedData));
        setSearchedPosts(sortedData)
        
        dispatch(changeCompletedState({message: "to complete"}))

        dispatch(addCurrSearchPosts(sortedData))
        dispatch(addCurrSearchValue(value))
        }
        catch(err){
        console.log('err occured: ' + JSON.stringify(err.message));
        dispatch(changeErrorState({message: "to err"}))

        }
        dispatch(changeToInitialState({message: "to initial"}))
    }
    

return <div>
    {isLoading && <p>Loading...</p>}
    {!isLoading && <ul>
        {searchedPosts.length > 0? searchedPosts.map(onePost => {
            return <li key={onePost.id}>
                <Post onPost={onePost}/>
            </li>
        }): console.log('no searched posts')
        
    }
    </ul>}
</div>
}

export default SearchPosts