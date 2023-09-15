import React from 'react';
import {screen, act} from '@testing-library/react'
import '@testing-library/jest-dom'
import {renderWithProviders} from '../../../storeForTests/loadingAndPostReducersStore';
import {changeLoadingState} from "../../../../store/loadingSlice";
import 'core-js/stable/structured-clone';

const PostComponent = require("../../../../components/Posts/Post")
const popular = require("../../../../api/popularPosts/getPopularPosts")
const popularPostsData = require("./PopularPostsData")

describe("PopularPosts", () => {
    afterEach(() => {
        jest.restoreAllMocks();
      });
    


  it("getPopularPosts is loading data, then Loading option comes up", async () => {

        const receivePopularPostsSpy = jest.spyOn(popular, "getPopularPosts")
            .mockImplementationOnce((dispatch) => {
                console.log('receivePopularPostsSpy called');
                dispatch(changeLoadingState({message: "to loading"}))

                return []
            })

        const PostsComponentSpy = jest.spyOn(PostComponent, "Post")
            .mockImplementationOnce((calledWith, p, y) => {
                console.log('PostsComponentSpy1 called' + JSON.stringify(calledWith));
                return ;
            })

        const PopularPosts = (await import("../../../../api/popularPosts/PopularPosts")).default
        const utils = renderWithProviders(<PopularPosts/>)

        await act(async () => {
            // eslint-disable-next-line testing-library/no-debugging-utils
            await screen.debug()

        })

        expect(await receivePopularPostsSpy).toHaveBeenCalled()
        expect(PostsComponentSpy).toHaveBeenCalledTimes(0)
        expect(utils).toMatchSnapshot();


    })



    it("received null from getSortedPopularPosts to display", async () => {

        const receivePopularPostsSpy = jest.spyOn(popular, "getPopularPosts")
            .mockImplementationOnce(() => {
                console.log('receivePopularPostsSpy called');
                return null
            })

        const PostsComponentSpy = jest.spyOn(PostComponent, "Post")
            .mockImplementationOnce((calledWith, p, y) => {
                console.log('PostsComponentSpy1 called' + JSON.stringify(calledWith));
                return ;
            })

        const PopularPosts = (await import("../../../../api/popularPosts/PopularPosts")).default
        const utils = renderWithProviders(<PopularPosts/>)

        await act(async () => {
            // eslint-disable-next-line testing-library/no-debugging-utils
            await screen.debug()

        })

        expect(await receivePopularPostsSpy).toHaveBeenCalled()
        expect(PostsComponentSpy).toHaveBeenCalledTimes(0)
        expect(utils).toMatchSnapshot();


    })



it("received empty [] of posts to display", async () => {

        const receivePopularPostsSpy = jest.spyOn(popular, "getPopularPosts")
            .mockImplementationOnce(() => {
                console.log('receivePopularPostsSpy called');
                return []
            })

        const PostsComponentSpy = jest.spyOn(PostComponent, "Post")
            .mockImplementation((calledWith, p, y) => {
                console.log('PostsComponentSpy1 called' + JSON.stringify(calledWith));
                return ;
            })

        const PopularPosts = (await import("../../../../api/popularPosts/PopularPosts")).default
        const utils = renderWithProviders(<PopularPosts/>)

        await act(async () => {
            // eslint-disable-next-line testing-library/no-debugging-utils
            await screen.debug()

        })

        expect(await receivePopularPostsSpy).toHaveBeenCalledTimes(1)
        expect(PostsComponentSpy).toHaveBeenCalledTimes(0)
        expect(utils).toMatchSnapshot();


    })



  it("received two valid posts to display", async () => {

        const receivePopularPostsSpy = jest.spyOn(popular, "getPopularPosts")
            .mockImplementationOnce(() => {
                console.log('receivePopularPostsSpy called');
                const twoValidPosts = structuredClone(popularPostsData.PopularPostsData.twoSortedValidPosts)
                return twoValidPosts
            })

        const PostsComponentSpy = jest.spyOn(PostComponent, "Post")
            .mockImplementationOnce((calledWith, p, y) => {
                console.log('PostsComponentSpy1 called' + JSON.stringify(calledWith));
                return <p>PostsComponentSpy1</p>;
            })
            .mockImplementationOnce((calledWith, p, y) => {
                console.log('PostsComponentSpy2 called' + JSON.stringify(calledWith));
                return <p>PostsComponentSpy2</p>;
            })


        const PopularPosts = (await import("../../../../api/popularPosts/PopularPosts")).default
        const utils = renderWithProviders(<PopularPosts/>)

        await act(async () => {

            // eslint-disable-next-line testing-library/no-debugging-utils
            await screen.debug()

        })

        expect(await receivePopularPostsSpy).toHaveBeenCalled()
        expect(PostsComponentSpy).toHaveBeenCalledTimes(2)
        expect(PostsComponentSpy).toHaveBeenNthCalledWith(1, {onPost: popularPostsData.PopularPostsData.twoSortedValidPosts[0]}, {})
        expect(PostsComponentSpy).toHaveBeenNthCalledWith(2, {onPost: popularPostsData.PopularPostsData.twoSortedValidPosts[1]}, {})
        expect(utils).toMatchSnapshot();


    })




})




