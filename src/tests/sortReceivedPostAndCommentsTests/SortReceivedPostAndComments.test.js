/* eslint-disable no-use-before-define */
import Enzyme, {shallow} from 'enzyme';
import { EnzymeAdapter } from 'enzyme';
import { validCommentData, commentInRepliesData } from './SortReceivedPostAndCommentsData';
import { validCommentDataExpectedResults } from './SortReceivedPostAndCommentsDataExpectedResults'
//import SortCommentNestedReplies from '../../helpers/sortReceivedPostAndCComments/SortCommentNestedReplies';

import SortReplies from '../../helpers/sortReceivedPostAndCComments/SortNestedReplies';
import ValidComment from '../../helpers/sortReceivedPostAndCComments/ValidComment';
// import SortReceivedPostAndComments from '../../helpers/sortReceivedPostAndCComments/SortReceivedPostAndComments';


//ps clear mocks for each test when needed



Enzyme.configure({adapter: new EnzymeAdapter()});

describe('comment validation', () => {
    
    it('receiving empty comment', () => {
        const comment = {}
        const result = ValidComment(comment)
        const expectedResult = { isValid: false }

        expect(result).toMatchObject(expectedResult)
    });

    it('receiving a comment with correct fields', () => {
        const comment = validCommentData.commentWithCorrectFields
        const result = ValidComment(comment)
        const expectedResult = validCommentDataExpectedResults.commentWithCorrectFields
        
        expect(result).toMatchObject(expectedResult)
    });

    it('receiving a comment with createdUTC field missing', () => {
        const comment = validCommentData.commentWithCreatedUTCFieldMissing
        const result = ValidComment(comment)
        
        const expectedResult = { isValid: false }
        expect(result).toMatchObject(expectedResult)
    });
})



describe('sorting nested replies' , () => {
    it ('commentForReplies replies field is empty string, sortNestedReplies not called', () => {
   const commentForReplies = ""
   const addRepliesFieldTo = commentInRepliesData.addRepliesFieldTo
    let spySortCommentNestedReplies = jest.spyOn(SortReplies, "SortCommentNestedReplies")

SortReplies.SortNestedReplies(commentForReplies, addRepliesFieldTo)

    expect(spySortCommentNestedReplies).not.toBeCalled()
    });
 
    //################################################################

    it ('commentForReplies replies field is an object, sortNestedReplies is called', () => {
        const commentForReplies =  {
            "kind": "Listing",
            "data": {
                "children": [
                    {
                        "kind": "t1",
                        "data": {
                            "subreddit_id": "t5_dyqlw",
                            "subreddit": "clevercomebacks",
                            "replies": "",
                            "id": "jtdy6g4",
                            "author": "StinkyMcFartBalls",
                            "created_utc": 1690294670.0,
                            "parent_id": "t1_jtcy1tw",
                            "score": 22,
                            "author_fullname": "t2_q8cqh47d",
                            "body": "Threw me off for a second",
                            "name": "t1_jtdy6g4",
                            "downs": 0,
                            "link_id": "t3_159056w",
                            "created": 1690294670.0,
                            "subreddit_name_prefixed": "r/clevercomebacks",
                            "ups": 22
                        }
                    }]
            }
        }
                       
        const addRepliesFieldTo = {
            id: "id",
            author: "author",
            downs: "downs",
            ups: "ups",
            body: "body",
            subreddit_name_prefixed: "subreddit_name_prefixed",
            replies: [],
            moreReplies: []
        }
        const  commentInRepliesData = commentForReplies.data.children
        SortReplies.SortCommentNestedReplies = jest.fn(() => {console.log('jest fn');
        })
        SortReplies.SortNestedReplies(commentForReplies, addRepliesFieldTo)
        expect(SortReplies.SortCommentNestedReplies).toBeCalled()


         })
})
