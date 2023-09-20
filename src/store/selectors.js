
export const loadingSelector = state => state.loadingReducer.loading
export const popularPostsSelector = state => state.postsReducer.popularPosts

export const savedSearchedValue = state => state.postsReducer.currSearchValue
export const savedSearchedPosts = state => state.postsReducer.currSearchPosts
