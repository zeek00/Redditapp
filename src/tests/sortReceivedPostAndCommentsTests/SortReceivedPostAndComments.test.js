/* eslint-disable no-use-before-define */
import Enzyme, {shallow} from 'enzyme';
import { EnzymeAdapter } from 'enzyme';
import { validCommentData, commentInRepliesData } from './SortReceivedPostAndCommentsData';
import { validCommentDataExpectedResults } from './SortReceivedPostAndCommentsDataExpectedResults'
//import SortCommentNestedReplies from '../../helpers/sortReceivedPostAndCComments/SortCommentNestedReplies';

//import SortReplies from '../../helpers/sortReceivedPostAndCComments/SortNestedReplies';
import * as SortComments from '../../helpers/sortReceivedPostAndCComments/SortReceivedPostAndComments';


import * as ValidCom from '../../helpers/sortReceivedPostAndCComments/ValidComment';


//ps clear mocks for each test when needed



Enzyme.configure({adapter: new EnzymeAdapter()});


describe("Sort Comment Nested Replies", () => {

    it("comment In Replies Data kind is t1 and isValid commit", () => {

        const sortCommentNestedRepliesParam1 = commentInRepliesData.replyCommentWithObjField.data.children
        const currComment = validCommentData.commentWithCorrectFields
        const validCommentSpyToReturn = {
            isValid: true,
            currentComment: currComment
        }

        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment").mockImplementation(() => {
            console.log('validCommentSpy worked');
            
            return validCommentSpyToReturn;
        })
       const sortNestedRepliesSpy = jest.spyOn(SortComments, "SortNestedReplies").mockImplementation(() => {
        console.log('sortNestedRepliesSpy was called');
        
       })

        SortComments.SortCommentNestedReplies(sortCommentNestedRepliesParam1, commentInRepliesData.addRepliesFieldTo)
      expect(validCommentSpy).toBeCalled()
        expect(validCommentSpy).toHaveReturnedWith(validCommentSpyToReturn)
       expect(sortNestedRepliesSpy).toBeCalled()

        expect(sortNestedRepliesSpy).toHaveBeenCalledWith(sortCommentNestedRepliesParam1[0].data.replies, currComment)
        validCommentSpy.mockRestore();
        sortNestedRepliesSpy.mockRestore();

    })


})



/*
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


//###############################################################################################

describe('sorting nested replies' , () => {
    const addRepliesFieldTo = commentInRepliesData.addRepliesFieldTo
    const objCommentForReplies = commentInRepliesData.replyCommentWithObjField
    const emptyCommentForReplies = ""
    const listCommentForReplies = []
    it ('commentForReplies replies field is empty string, sortNestedReplies not called', () => {
        
        let spySortCommentNestedReplies = jest.spyOn(SortComments, "SortCommentNestedReplies")
        SortComments.SortNestedReplies(emptyCommentForReplies, addRepliesFieldTo)

        expect(spySortCommentNestedReplies).not.toBeCalled()
        spySortCommentNestedReplies.mockRestore()
 });
    it ('commentForReplies replies field is an object, sortNestedReplies is called', () => {
        const  commentInRepliesData = objCommentForReplies.data.children

        const sortNestedCommentsRepliesSpy = jest.spyOn(SortComments, "SortCommentNestedReplies").mockImplementation(() => { return ; });
        SortComments.SortNestedReplies(objCommentForReplies, addRepliesFieldTo)

        expect(sortNestedCommentsRepliesSpy).toBeCalledWith(commentInRepliesData, addRepliesFieldTo)
        sortNestedCommentsRepliesSpy.mockRestore()
         });
    it ('commentForReplies replies field is a list, sortNestedReplies is not called', () => {
        let spySortCommentNestedReplies = jest.spyOn(SortComments, "SortCommentNestedReplies")
        SortComments.SortNestedReplies(listCommentForReplies, addRepliesFieldTo)

        expect(spySortCommentNestedReplies).not.toBeCalled()
        spySortCommentNestedReplies.mockRestore()
        });        
        })
        */
