import Enzyme, { shallow } from 'enzyme';
import { EnzymeAdapter } from 'enzyme';

import * as popularPostsData from './PopularPostsData'
import * as sortPosts from '../../helpers/SortReceivedPosts'
import PopularPosts from '../../api/PopularPosts/PopularPosts'
import * as popular from '../../api/popularPosts/getPopularPosts'
import * as selectors from '../../store/selectors'
import { mount } from 'enzyme';



Enzyme.configure({ adapter: new EnzymeAdapter() });

   //mock: useSelector, useDispatch,  getSortedPopularPosts
    //do not mock yet useState, useEffect

describe("PopularPosts", () => {

    it("received two valid posts to display", () => {
     
        const receivePopularPostsSpy = jest.spyOn(popular, "getSortedPopularPosts")
        .mockImplementationOnce(()=> {
            return popularPostsData.PopularPostsData.twoSortedValidPosts
        })

        const mockUseDispatch = jest.fn()
        jest.mock("react-redux", () => ({
            useDispatch: () => mockUseDispatch,
            }))

       
        jest.mock("react-redux", () => ({
            useSelector : jest.fn().mockImplementation(selector => selector())
        }))
        jest.mock("../../store/selectors", () => ({
            loadingSelector: jest.fn().mockReturnValue(false),
            popularPostsSelector: jest.fn().mockReturnValue([])
        }))


        //when dispatch is called push to selector posts/ 
        //rerender with new content in selector?
        //usestate will react to new content in selector and rerenders component?
        //how usestate and useselector works in tests
        //need to test if useState received posts
        //mock usestate







    })



})
