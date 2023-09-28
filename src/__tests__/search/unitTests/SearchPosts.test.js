import React from 'react';
import {screen, act} from '@testing-library/react'
import '@testing-library/jest-dom'
import {renderWithProviders} from '../../storeForTests/loadingAndPostReducersStore';
import {changeLoadingState} from "../../../store/loadingSlice";
import 'core-js/stable/structured-clone';
import * as SearchPosts from '../../../api/search/SearchPosts'
import * as getSearchData from '../../../api/search/getSortedSearchedData'
import * as PostComponent from '../../../components/Posts/Post'
import Router from "react-router-dom";
import * as searchData from '../searchPostsData'


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
}));



describe("SearchPosts", () => {

    afterEach(() => {
        jest.restoreAllMocks();

    });


    it("getSortedSearchedData is loading data, then Loading option comes up", async () => {

    const useParamsSpy = jest.spyOn(Router, 'useParams')
        .mockImplementation(() => {
            console.log("useParamsSpy was called")
            return { value: 'abcde' }
        })


        const getSearchDataSpy = jest.spyOn(getSearchData, "getSortedSearchedData")
            .mockImplementationOnce((dispatch) => {
                console.log('getSearchDataSpy called');
                dispatch(changeLoadingState({message: "loading data"}))

                return []
            })

        const PostsComponentSpy = jest.spyOn(PostComponent, "Post")
            .mockImplementationOnce((calledWith, p, y) => {
                console.log('PostsComponentSpy1 called' + JSON.stringify(calledWith));
                return ;
            })

        const SearchPosts = (await import("../../../api/search/SearchPosts")).default
        const utils = renderWithProviders(<SearchPosts/>)

        await act(async () => {
            // eslint-disable-next-line testing-library/no-debugging-utils
            await screen.debug()

        })

        expect(await getSearchDataSpy).toHaveBeenCalledTimes(1)
        expect(PostsComponentSpy).toHaveBeenCalledTimes(0)
        expect(useParamsSpy).toHaveBeenCalled()
        expect(utils).toMatchSnapshot();


    })
    it("SearchPosts getSortedSearchedData is an {},PostsComponentSpy not called,useParamsSpy called", async () => {

        const useParamsSpy = jest.spyOn(Router, 'useParams')
            .mockImplementation(() => {
                console.log("useParamsSpy was called")
                return { value: 'abcde' }
            })


        const getSearchDataSpy = jest.spyOn(getSearchData, "getSortedSearchedData")
            .mockImplementationOnce((dispatch) => {
                console.log('getSearchDataSpy called');


                return {}
            })

        const PostsComponentSpy = jest.spyOn(PostComponent, "Post")
            .mockImplementationOnce((calledWith, p, y) => {
                console.log('PostsComponentSpy1 called' + JSON.stringify(calledWith));
                return ;
            })

        const SearchPosts = (await import("../../../api/search/SearchPosts")).default
        const utils = renderWithProviders(<SearchPosts/>)

        await act(async () => {
            // eslint-disable-next-line testing-library/no-debugging-utils
            await screen.debug()

        })

        expect(await getSearchDataSpy).toHaveBeenCalledTimes(1)
        expect(PostsComponentSpy).toHaveBeenCalledTimes(0)
        expect(useParamsSpy).toHaveBeenCalled()
        expect(utils).toMatchSnapshot();


    })
    it("receivedSearchedData returns one sorted post, after render searchedPosts should be that one sorted post", async () => {



        const useParamsSpy = jest.spyOn(Router, 'useParams')
            .mockImplementation(() => {
                console.log("useParamsSpy was called")
                return { value: 'abcde' }
            })


        const getSearchDataSpy = jest.spyOn(getSearchData, "getSortedSearchedData")
            .mockImplementationOnce((dispatch) => {
                console.log('getSearchDataSpy called');


                return structuredClone(searchData.searchData.oneSortedPost)
            })

        const PostsComponentSpy = jest.spyOn(PostComponent, "Post")
            .mockImplementationOnce((calledWith, p, y) => {
                console.log('PostsComponentSpy1 called' + JSON.stringify(calledWith));
                return <p>PostsComponentSpy1</p>
            })


        const SearchPosts = (await import("../../../api/search/SearchPosts")).default
        const utils = renderWithProviders(<SearchPosts/>)

        await act(async () => {
            // eslint-disable-next-line testing-library/no-debugging-utils
            await screen.debug()

        })

        expect(await getSearchDataSpy).toHaveBeenCalledTimes(1)
        expect(PostsComponentSpy).toHaveBeenCalledTimes(1)
        expect(PostsComponentSpy).toHaveBeenNthCalledWith(1, {onPost: searchData.searchData.oneSortedPost[0]}, {})

        expect(useParamsSpy).toHaveBeenCalled()
        expect(utils).toMatchSnapshot();


    })

    it("receivedSearchedData returns two sorted posts, after render searchedPosts should be those two sorted posts and PostsComponentSpy called twice", async () => {



        const useParamsSpy = jest.spyOn(Router, 'useParams')
            .mockImplementation(() => {
                console.log("useParamsSpy was called")
                return { value: 'abcde' }
            })


        const getSearchDataSpy = jest.spyOn(getSearchData, "getSortedSearchedData")
            .mockImplementationOnce((dispatch) => {
                console.log('getSearchDataSpy called');


                return structuredClone(searchData.searchData.twoSortedPosts)
            })

        const PostsComponentSpy = jest.spyOn(PostComponent, "Post")
            .mockImplementationOnce((calledWith, p, y) => {
                console.log('PostsComponentSpy1 called' + JSON.stringify(calledWith));
                return <p>PostsComponentSpy1</p>
            })
            .mockImplementationOnce((calledWith, p, y) => {
                console.log('PostsComponentSpy1 called' + JSON.stringify(calledWith));
                return <p>PostsComponentSpy2</p>
            })


        const SearchPosts = (await import("../../../api/search/SearchPosts")).default
        const utils = renderWithProviders(<SearchPosts/>)

        await act(async () => {
            // eslint-disable-next-line testing-library/no-debugging-utils
            await screen.debug()

        })

        expect(await getSearchDataSpy).toHaveBeenCalledTimes(1)
        expect(PostsComponentSpy).toHaveBeenCalledTimes(2)
        expect(PostsComponentSpy).toHaveBeenNthCalledWith(1, {onPost: searchData.searchData.twoSortedPosts[0]}, {})
        expect(PostsComponentSpy).toHaveBeenNthCalledWith(2, {onPost: searchData.searchData.twoSortedPosts[1]}, {})
        expect(useParamsSpy).toHaveBeenCalled()
        expect(utils).toMatchSnapshot();


    })


})