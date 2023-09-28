import Enzyme from 'enzyme';
import { EnzymeAdapter } from 'enzyme';
import 'core-js/stable/structured-clone';
import * as sortPosts from "../../../helpers/sortReceivedPosts/SortReceivedPosts";
import * as getPosts from '../../../api/search/getSortedSearchedData'
import * as searchData from '../searchPostsData'
import {addCurrSearchPosts} from "../../../store/postsSlice";


Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("getSortedSearchedData", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    //value empty string, one letter, two letters, 3 letters,4, 5, 6
    it("value is an empty string, return is []", async () => {
        const mockResponse = {}
        const SortReceivedPostsSpyReturn = []
        const value = ""

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })

        const SortReceivedPostsSpy = jest.spyOn(sortPosts, "SortReceivedPosts")
            .mockImplementation(() => {

                return SortReceivedPostsSpyReturn
            })

        const mockDispatch = jest.fn();
        jest.mock('react-redux', () => ({
            ...jest.requireActual("react-router-dom"),
            useDispatch: () => mockDispatch
        }));

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, value)

        expect(toReturn).toMatchObject([])
        expect(fetchSpy).toBeCalledTimes(0)
        expect(SortReceivedPostsSpy).toBeCalledTimes(0)
        expect(mockDispatch).toBeCalledTimes(0)

    })
    it("value is 1 char, return is []", async () => {
        const mockResponse = {}
        const SortReceivedPostsSpyReturn = []
        const value = "a"

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })

        const SortReceivedPostsSpy = jest.spyOn(sortPosts, "SortReceivedPosts")
            .mockImplementation(() => {

                return SortReceivedPostsSpyReturn
            })

        const mockDispatch = jest.fn();
        jest.mock('react-redux', () => ({
            ...jest.requireActual("react-router-dom"),
            useDispatch: () => mockDispatch
        }));

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, value)

        expect(toReturn).toMatchObject([])
        expect(fetchSpy).toBeCalledTimes(0)
        expect(SortReceivedPostsSpy).toBeCalledTimes(0)
        expect(mockDispatch).toBeCalledTimes(0)

    })

    it("value is 4 char, return is []", async() => {
        const mockResponse = {}
        const SortReceivedPostsSpyReturn = []
        const val = "aaaa"

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })

        const SortReceivedPostsSpy = jest.spyOn(sortPosts, "SortReceivedPosts")
            .mockImplementation(() => {

                return SortReceivedPostsSpyReturn
            })

        const mockDispatch = jest.fn();
        jest.mock('react-redux', () => ({
            ...jest.requireActual("react-router-dom"),
            useDispatch: () => mockDispatch
        }));

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, val)

        expect(toReturn).toMatchObject([])
        expect(fetchSpy).toBeCalledTimes(0)
        expect(SortReceivedPostsSpy).toBeCalledTimes(0)
        expect(mockDispatch).toBeCalledTimes(0)

    })

    it("value is 5 char, return is ", async() => {
        const mockResponse = structuredClone(searchData.searchData.oneValidSearchPosts)
        const SortReceivedPostsSpyReturn = structuredClone(searchData.searchData.oneSortedPost)
        const val = "aaaaa"

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })

        const SortReceivedPostsSpy = jest.spyOn(sortPosts, "SortReceivedPosts")
            .mockImplementation(() => {

                return SortReceivedPostsSpyReturn
            })

        const mockDispatch = jest.fn();
        jest.mock('react-redux', () => ({
            ...jest.requireActual("react-router-dom"),
            useDispatch: () => mockDispatch
        }));

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, val)

        expect(toReturn).toMatchObject(searchData.searchData.oneSortedPost)

        expect(fetchSpy).toBeCalledTimes(1)
        expect(fetchSpy).toHaveBeenCalledWith(`https://www.reddit.com/search.json?q=${val}&restrict_sr=on&include_over_18=on&sort=relevance&t=all&raw_json=1`)

        expect(SortReceivedPostsSpy).toBeCalledTimes(1)
        expect(SortReceivedPostsSpy).toHaveReturnedWith(searchData.searchData.oneSortedPost)

        expect(mockDispatch).toBeCalledTimes(4)
        expect(mockDispatch).toHaveBeenNthCalledWith(1,
            {
                type: "loadingState/changeLoadingState",
                payload: {
                    message: "to loading"
                }
            }
            )
        expect(mockDispatch).toHaveBeenNthCalledWith(2,
            {
                type: "loadingState/changeCompletedState",
                payload: {
                    message: "to complete"
                }
            }
        )
        expect(mockDispatch).toHaveBeenNthCalledWith(3,
            {
                type: "postsData/addCurrSearchPosts",
                payload: searchData.searchData.oneSortedPost
            }
        )
        expect(mockDispatch).toHaveBeenNthCalledWith(4,
            {
                type: "postsData/addCurrSearchValue",
                payload: val
            }
        )

    })

    it("value is undefined, return is []", async () => {
        const mockResponse = {}
        const SortReceivedPostsSpyReturn = []
        const value = undefined

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })

        const SortReceivedPostsSpy = jest.spyOn(sortPosts, "SortReceivedPosts")
            .mockImplementation(() => {

                return SortReceivedPostsSpyReturn
            })

        const mockDispatch = jest.fn();
        jest.mock('react-redux', () => ({
            ...jest.requireActual("react-router-dom"),
            useDispatch: () => mockDispatch
        }));

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, value)

        expect(toReturn).toMatchObject([])
        expect(fetchSpy).toBeCalledTimes(0)
        expect(SortReceivedPostsSpy).toBeCalledTimes(0)
        expect(mockDispatch).toBeCalledTimes(0)

    })
    it("value is null, return is []", async () => {
        const mockResponse = {}
        const SortReceivedPostsSpyReturn = []
        const value = null

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })

        const SortReceivedPostsSpy = jest.spyOn(sortPosts, "SortReceivedPosts")
            .mockImplementation(() => {

                return SortReceivedPostsSpyReturn
            })

        const mockDispatch = jest.fn();
        jest.mock('react-redux', () => ({
            ...jest.requireActual("react-router-dom"),
            useDispatch: () => mockDispatch
        }));

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, value)

        expect(toReturn).toMatchObject([])
        expect(fetchSpy).toBeCalledTimes(0)
        expect(SortReceivedPostsSpy).toBeCalledTimes(0)
        expect(mockDispatch).toBeCalledTimes(0)

    })

})