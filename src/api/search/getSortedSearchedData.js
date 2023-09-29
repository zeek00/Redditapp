import {
    changeCompletedState,
    changeErrorState,
    changeLoadingState,

} from "../../store/loadingSlice";
import {addCurrSearchPosts, addCurrSearchValue} from "../../store/postsSlice";
import * as ReceivedPosts from '../../helpers/sortReceivedPosts/SortReceivedPosts'
import searchData from "./searchDataExample"
export const getSortedSearchedData = async (dispatch, value) => {
    try {
        const toReturn = []


        //undefined or null
        if (value === undefined || value === null){
            console.log("value in getSortedSearchedData is undefined or null")
            return toReturn
        }
        else {
            if (value.length >= 5){
                const url = `https://www.reddit.com/search.json?q=${value}&restrict_sr=on&include_over_18=on&sort=relevance&t=all&raw_json=1`
                dispatch(changeLoadingState({message: "to loading"}))


                const response = await fetch(url)

                if (!response.ok){
                    throw new Error("err occurred !response.ok in getSortedSearchedData")
                }
                const searchedData = await response.json()

                //#########sorting with fetched data
                const sortedData = ReceivedPosts.SortReceivedPosts(searchedData.data.children)

                //#########sorting with example data
             //  const sortedData = ReceivedPosts.SortReceivedPosts(searchData.data.children)



                dispatch(changeCompletedState({message: "to complete"}))

                dispatch(addCurrSearchPosts(sortedData))
                dispatch(addCurrSearchValue(value))
                console.log("sortedData is: " + JSON.stringify(sortedData))
                return sortedData
            }
            else {
                console.log("value in getSortedSearchedData is less then 5, need at least 5 characters to be able to search, was given: " + value.length)
                return toReturn
            }
        }


    }
    catch(err){
        console.log('err occurred: ' + JSON.stringify(err.message));
        dispatch(changeErrorState({message: "to err"}))
        dispatch(changeCompletedState({message: "to complete"}))
        return []

    }
}