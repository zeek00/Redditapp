import Enzyme from 'enzyme';
import { EnzymeAdapter } from 'enzyme';

import * as popularPostsData from './PopularPostsData'
import * as sortPosts from '../../helpers/SortReceivedPosts'
import * as popular from '../../api/popularPosts/getPopularPosts'
import * as nestedObjectFieldsValidation from '../../helpers/nestedObjectsFieldValidation/getNestedObjects';

Enzyme.configure({ adapter: new EnzymeAdapter() });


describe("getPopularPosts", () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("sorting two valid posts, return two sorted posts", async () => {
    const mockResponse = structuredClone(popularPostsData.PopularPostsData.twoValidPosts)
    const SortReceivedPostsSpyReturn = popularPostsData.PopularPostsData.twoSortedValidPosts

    const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse)
    })

    const SortReceivedPostsSpy = jest.spyOn(sortPosts, "SortReceivedPosts")
      .mockImplementation(() => {
        const toReturn = structuredClone(SortReceivedPostsSpyReturn)

        return toReturn
      })

    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
      useDispatch: () => mockDispatch
    }));

    const isDataDataChildrenFieldExistsSpy = jest.spyOn(nestedObjectFieldsValidation, "getIsNestedObjectExists")
      .mockImplementation(() => {
        return true
      })

    const result = await popular.getSortedPopularPosts(mockDispatch)

    expect(result).toMatchObject(SortReceivedPostsSpyReturn)

    expect(fetchSpy).toBeCalledTimes(1)
    expect(fetchSpy).toHaveBeenCalledWith("https://www.reddit.com/r/popular/top.json?raw_json=1")

    expect(SortReceivedPostsSpy).toBeCalledTimes(1)
    expect(SortReceivedPostsSpy).toHaveReturnedWith(SortReceivedPostsSpyReturn)

    expect(mockDispatch).toHaveBeenNthCalledWith(1, {
      payload: {
        message: "to loading"
      },
      type: "loadingState/changeLoadingState"
    })
    expect(mockDispatch).toHaveBeenNthCalledWith(2, {
      payload: {
        message: "to completed"
      },
      type: "loadingState/changeCompletedState"
    })

    expect(mockDispatch).toBeCalledTimes(2)

    expect(isDataDataChildrenFieldExistsSpy).toBeCalledTimes(1)
    expect(isDataDataChildrenFieldExistsSpy).toHaveReturnedWith(true)

  });

  it("fetch response.ok is false throw err and cach err also return null", async () => {
    const mockResponse = structuredClone(popularPostsData.PopularPostsData.twoValidPosts)

    const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(mockResponse)
    })

    const SortReceivedPostsSpy = jest.spyOn(sortPosts, "SortReceivedPosts")
      .mockImplementation(() => {
        return;
      })

    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
      useDispatch: () => mockDispatch
    }));
    const isDataDataChildrenFieldExistsSpy = jest.spyOn(nestedObjectFieldsValidation, "getIsNestedObjectExists")
      .mockImplementation(() => {
        return false
      })

    const result = await popular.getSortedPopularPosts(mockDispatch)

    expect(result).toBe(null)

    expect(fetchSpy).toBeCalledTimes(1)
    expect(fetchSpy).toHaveBeenCalledWith("https://www.reddit.com/r/popular/top.json?raw_json=1")

    expect(SortReceivedPostsSpy).toBeCalledTimes(0)

    expect(mockDispatch).toHaveBeenNthCalledWith(1, {
      payload: {
        message: "to loading"
      },
      type: "loadingState/changeLoadingState"
    })
    expect(mockDispatch).toHaveBeenNthCalledWith(2, {
      payload: {
        message: "to err"
      },
      type: "loadingState/changeErrorState"
    })

    expect(mockDispatch).toBeCalledTimes(2)

    expect(isDataDataChildrenFieldExistsSpy).toBeCalledTimes(0)

  });

  it("fetch response with object that does not have a required field", async () => {
    const mockResponse = { data: { notReqField: "o" } }

    const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse)
    })

    const SortReceivedPostsSpy = jest.spyOn(sortPosts, "SortReceivedPosts")
      .mockImplementation(() => {
        return;
      })

    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
      useDispatch: () => mockDispatch
    }));

    const isDataDataChildrenFieldExistsSpy = jest.spyOn(nestedObjectFieldsValidation, "getIsNestedObjectExists")
      .mockImplementation(() => {
        return false
      })

    const result = await popular.getSortedPopularPosts(mockDispatch)

    expect(result).toBe(null)

    expect(fetchSpy).toBeCalledTimes(1)
    expect(fetchSpy).toHaveBeenCalledWith("https://www.reddit.com/r/popular/top.json?raw_json=1")

    expect(SortReceivedPostsSpy).toBeCalledTimes(0)

    expect(mockDispatch).toHaveBeenNthCalledWith(1, {
      payload: {
        message: "to loading"
      },
      type: "loadingState/changeLoadingState"
    })
    expect(mockDispatch).toHaveBeenNthCalledWith(2, {
      payload: {
        message: "to err"
      },
      type: "loadingState/changeErrorState"
    })

    expect(mockDispatch).toBeCalledTimes(2)

    expect(isDataDataChildrenFieldExistsSpy).toBeCalledTimes(1)
    expect(isDataDataChildrenFieldExistsSpy).toHaveReturnedWith(false)

  });
})

