import Enzyme, {shallow} from 'enzyme';
import { EnzymeAdapter } from 'enzyme';
import { SortReceivedPosts } from '../../../../helpers/sortReceivedPosts/SortReceivedPosts';
import SortReceivedPostsData from '../../SortReceivedPostsData';
import SortReceivedPostsExpectedResults from '../../SortReceivedPostsExpectedResults';

Enzyme.configure({adapter: new EnzymeAdapter()});

describe('sort received posts', () => {

    it('when received posts has no posts' , () => {

        const receivedPosts = []
        const result = SortReceivedPosts(receivedPosts)
        const expectedResult = []
        expect(result).toEqual(expect.arrayContaining(expectedResult))
    });
    //################## receiving one post  ###############################################
    it('when received post has one post with correct fields', () => {

        const receivedPosts = SortReceivedPostsData.oneCorrectPost
        const result = SortReceivedPosts(receivedPosts)
        const expectedResult = SortReceivedPostsExpectedResults.oneCorrectPostExpRes
        expect(result).toMatchObject(expectedResult)
    });

    it('when received post has one post with title field missing', () => {
        
        const receivedPosts = SortReceivedPostsData.onePostWithMissingTitleField
        const result = SortReceivedPosts(receivedPosts)
        const expectedResult = []
        expect(result).toEqual(expect.arrayContaining(expectedResult))
    });
    //################### receiving two posts ###############################################
    it('when received post has 2 posts with correct fields', () => {
        const receivedPosts = SortReceivedPostsData.twoCorrectPosts

        const result = SortReceivedPosts(receivedPosts)
        const expectedResult = SortReceivedPostsExpectedResults.twoCorrectPostsExpRes
        expect(result).toMatchObject(expectedResult)
    });
    it('when received post has 2 posts, first post missing title field', () => {

        const receivedPosts = SortReceivedPostsData.twoPostsWithFirstPostMissingTitle
        const result = SortReceivedPosts(receivedPosts)
        const expectedResult = SortReceivedPostsExpectedResults.twoPostsWithFirstPostMissingTitleExpRes
        expect(result).toMatchObject(expectedResult)
    });
    it('when received post has 2 posts, both missing title fields', () => {

        const receivedPosts = SortReceivedPostsData.twoPostsWithMissingTitles
        const result = SortReceivedPosts(receivedPosts)
        const expectedResult = []
        expect(result).toEqual(expect.arrayContaining(expectedResult))    });

})