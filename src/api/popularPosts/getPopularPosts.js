import {changeLoadingState,  changeCompletedState,changeErrorState} from '../../store/loadingSlice' 
import * as sortPosts from '../../helpers/SortReceivedPosts'
import { getIsNestedObjectExists } from '../../helpers/nestedObjectsFieldValidation/getNestedObjects';

export const getSortedPopularPosts = async (dispatch) => {
    try {
       const url = 'https://www.reddit.com/r/popular/top.json?raw_json=1';

  dispatch(changeLoadingState({message: "to loading"}))

 const response = await fetch(url)

        if(!response.ok){
            dispatch(changeErrorState({message: "to err"}))
              throw new Error("Request failed with status code: " + response.status);
          }
          const data = await response.json()
          console.log('data is: ' + JSON.stringify(data));
         
          const isDataDataChildrenFieldExists = getIsNestedObjectExists(data, "data" ,"children")
          console.log('isDataDataChildrenFieldExists ' + JSON.stringify(isDataDataChildrenFieldExists));
          
          if (isDataDataChildrenFieldExists){
            const getSortedReceivedPosts = sortPosts.SortReceivedPosts(data.data.children)
          console.log('after getSortedReceivedPosts ' + JSON.stringify(getSortedReceivedPosts));
          
          dispatch(changeCompletedState({message: "to completed"}))
          console.log('returning');
          
          return getSortedReceivedPosts
          }
          else {
            dispatch(changeErrorState({message: "to err"}))
            throw new Error("err occured in getPopularPosts func, received obj does'nt have required field :[data.data.children]");
     
          }
          
        }
        catch(err) {
        console.log('err occured in getSortedPopularPosts ' + JSON.stringify(err.message));
        return null
     }
}
