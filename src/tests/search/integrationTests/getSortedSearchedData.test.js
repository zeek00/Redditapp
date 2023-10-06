import Enzyme from 'enzyme';
import { EnzymeAdapter } from 'enzyme';
import 'core-js/stable/structured-clone';
import * as sortPosts from "../../../helpers/sortReceivedPosts/SortReceivedPosts";
import * as getPosts from '../../../api/search/getSortedSearchedData'
import * as searchData from '../searchPostsData'
import {addCurrSearchPosts} from "../../../store/postsSlice";
import {useDispatch} from "react-redux";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    ...jest.requireActual("react-router-dom"),
    useDispatch: () => mockDispatch
}));

describe("getSortedSearchedData", () => {
  beforeEach(()=> {
      mockDispatch.mockReset()
  })

    afterEach(() => {
        jest.restoreAllMocks();
    });


   //
    it("value is an empty string, return is []", async () => {
        const mockResponse = {}
        const value = ""

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, value)

        expect(toReturn).toMatchObject([])
        expect(fetchSpy).toBeCalledTimes(0)
        expect(mockDispatch).toBeCalledTimes(0)

    })
    it("value is 1 char, return is []", async () => {
        const mockResponse = {}
        const value = "a"

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, value)

        expect(toReturn).toMatchObject([])
        expect(fetchSpy).toBeCalledTimes(0)
        expect(mockDispatch).toBeCalledTimes(0)

    })


    it("value is 4 char, return is []", async() => {
        const mockResponse = {}
        const val = "aaaa"

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, val)

        expect(toReturn).toMatchObject([])
        expect(fetchSpy).toBeCalledTimes(0)
        expect(mockDispatch).toBeCalledTimes(0)

    })

    it("value is 5 char, fetch was called and sorted", async() => {
        const mockResponse = structuredClone(searchData.searchData.oneValidSearchPosts)
        const val = "aaaaa"

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })
        const redditBasePath = process.env.REACT_APP_REDDIT_BASE_PATH
        const url = `${redditBasePath}/search.json?q=${val}&restrict_sr=on&include_over_18=on&sort=relevance&t=all&raw_json=1`

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, val)
        expect(toReturn).toMatchObject(searchData.searchData.oneSortedPost)

        expect(fetchSpy).toBeCalledTimes(1)
        expect(fetchSpy).toHaveBeenCalledWith(url)

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
        const value = undefined

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, value)

        expect(toReturn).toMatchObject([])
        expect(fetchSpy).toBeCalledTimes(0)
        expect(mockDispatch).toBeCalledTimes(0)

    })

    it("value is null, return is []", async () => {
        const mockResponse = {}
        const value = null

        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse)
        })

        const toReturn = await getPosts.getSortedSearchedData(mockDispatch, value)

        expect(toReturn).toMatchObject([])
        expect(fetchSpy).toBeCalledTimes(0)
        expect(mockDispatch).toBeCalledTimes(0)

    })

})