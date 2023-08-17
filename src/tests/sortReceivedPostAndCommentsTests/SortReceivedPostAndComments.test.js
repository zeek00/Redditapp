/* eslint-disable no-use-before-define */
import Enzyme, { shallow } from 'enzyme';
import { EnzymeAdapter } from 'enzyme';
import { validCommentData, commentInRepliesData,sortCommentNestedRepliesTestsDataT1AndNotValidAndT3, sortCommentNestedRepliesTestsDataOneObj, sortCommentNestedRepliesTestsDataTwoComments, sortCommentNestedRepliesTestsDataT1AndMore } from './SortReceivedPostAndCommentsData';
import { validCommentDataExpectedResults } from './SortReceivedPostAndCommentsDataExpectedResults'
//import SortCommentNestedReplies from '../../helpers/sortReceivedPostAndCComments/SortCommentNestedReplies';

//import SortReplies from '../../helpers/sortReceivedPostAndCComments/SortNestedReplies';
import * as SortComments from '../../helpers/sortReceivedPostAndCComments/SortReceivedPostAndComments';


import * as ValidCom from '../../helpers/sortReceivedPostAndCComments/ValidComment';


//ps clear mocks for each test when needed



Enzyme.configure({ adapter: new EnzymeAdapter() });



    describe("Sort Comment Nested Replies 1", () => {
        afterEach(() => {
            // restore the spy created with spyOn
            jest.restoreAllMocks();
        });
        afterEach(() => console.log('&&&&  test is done'))
    it("2 comments, both valid and Data kind is t1, first holds replies field empty str, second holds more comments", () => {
        //~~~~~   2 comments in children list
        const sortCommentNestedRepliesParam1 = sortCommentNestedRepliesTestsDataTwoComments.replyComments.Replies1Obj2EmptyStrValid2Comments.data.children

        const validCommentSpyToReturn1 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first
        }
        const validCommentSpyToReturn2 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second
        }
        const validCommentSpyToReturn3 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.third
        }
     
        const mainAddRepliesFieldTo = sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main
        const addedCommentRepliesReturn = sortCommentNestedRepliesTestsDataTwoComments.addedCommentRepliesReturn.Replies2Obj1EmptyStr1mMoreValid
        const fullReplies2Obj1EmptyStr1MoreReturn = addedCommentRepliesReturn.fullReplies2Obj1EmptyStr1MoreReturn
        const secondInFirstObjReplies = addedCommentRepliesReturn.secondInFirstObjReplies
        const moreInThirdObjMoreReplies = addedCommentRepliesReturn.moreInThirdObjMoreReplies
        
        // ~~~~   Valid Comment Spy 
        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                console.log('validCommentSpy1 called');
                return validCommentSpyToReturn1;
            })
            .mockImplementationOnce(() => {
                console.log('validCommentSpyToReturn2 called');
                return validCommentSpyToReturn2
            })
            .mockImplementationOnce(() => {
                console.log('validCommentSpyToReturn3 called');
                return validCommentSpyToReturn3
            })


        // ~~~~  Sort Nested Replies Spy     
        const sortNestedRepliesSpy = jest.spyOn(SortComments, "SortNestedReplies")
            .mockImplementationOnce(() => {
                console.log('sortNestedRepliesSpy1 called');
                const addedCommentReplies = SortComments.SortCommentNestedReplies(sortCommentNestedRepliesParam1[0].data.replies.data.children, validCommentSpyToReturn1.currentComment)
                console.log('addedCommentReplies sortNestedRepliesSpy1' + JSON.stringify(addedCommentReplies));
                return addedCommentReplies;
            })
            .mockImplementationOnce(() => {
                console.log('sortNestedRepliesSpy2 called');
                return validCommentSpyToReturn2.currentComment
            })
            .mockImplementationOnce(() => {
                console.log('sortNestedRepliesSpy3 called');
                const addedCommentReplies = SortComments.SortCommentNestedReplies(sortCommentNestedRepliesParam1[1].data.replies.data.children, validCommentSpyToReturn3.currentComment)
                console.log('addedCommentReplies sortNestedRepliesSpy3' + JSON.stringify(addedCommentReplies));
                return addedCommentReplies;
            })
        

        const addedCommentReplies1 = SortComments.SortCommentNestedReplies(sortCommentNestedRepliesParam1, mainAddRepliesFieldTo)

        expect(addedCommentReplies1).toMatchObject(fullReplies2Obj1EmptyStr1MoreReturn)

        expect(validCommentSpy).toHaveNthReturnedWith(1, validCommentSpyToReturn1)
        expect(validCommentSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2)
        expect(validCommentSpy).toHaveNthReturnedWith(3, validCommentSpyToReturn3)

        expect(validCommentSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam1[0].data)
        expect(validCommentSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam1[0].data.replies.data.children[0].data)
        expect(validCommentSpy).toHaveBeenNthCalledWith(3, sortCommentNestedRepliesParam1[1].data)

        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(1, secondInFirstObjReplies)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2.currentComment)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(3, moreInThirdObjMoreReplies)

        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam1[0].data.replies, validCommentSpyToReturn1.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam1[0].data.replies.data.children[0].data.replies, validCommentSpyToReturn2.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(3, sortCommentNestedRepliesParam1[1].data.replies, validCommentSpyToReturn3.currentComment)

    });

});

    afterEach(() => {
        // restore the spy created with spyOn
        jest.restoreAllMocks();
    });

it("comment isValid and Data kind is t1, comment replies has 1 obj that holds replies field empty str", () => {

        const sortCommentNestedRepliesParam1 = sortCommentNestedRepliesTestsDataOneObj.replyComments.Replies1Obj2EmptyStrValid.data.children

        const validCommentSpyToReturn1 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first
        }
        const validCommentSpyToReturn2 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second
        }

        const mainAddRepliesFieldTo = sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main
        const fullReplies1Obj2EmptyStrReturn = sortCommentNestedRepliesTestsDataOneObj.addedCommentRepliesReturn.Replies1Obj2EmptyStrValid.fullReplies1Obj2EmptyStrReturn
        const secondInFirstObjReplies = sortCommentNestedRepliesTestsDataOneObj.addedCommentRepliesReturn.Replies1Obj2EmptyStrValid.secondInFirstObjReplies

        // ~~~~   Valid Comment Spy 
        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                console.log('validCommentSpy1 called');
                return validCommentSpyToReturn1;
            })
            .mockImplementationOnce(() => {
                console.log('validCommentSpyToReturn2 called');
                return validCommentSpyToReturn2
            })

        // ~~~~  Sort Nested Replies Spy     
        const sortNestedRepliesSpy = jest.spyOn(SortComments, "SortNestedReplies")
            .mockImplementationOnce(() => {
                console.log('sortNestedRepliesSpy1 called');
                const addedCommentReplies = SortComments.SortCommentNestedReplies(sortCommentNestedRepliesParam1[0].data.replies.data.children, validCommentSpyToReturn1.currentComment)
                console.log('addedCommentReplies sortNestedRepliesSpy1' + JSON.stringify(addedCommentReplies));
                return addedCommentReplies;
            })
            .mockImplementationOnce(() => {
                console.log('sortNestedRepliesSpy2 called');
                return validCommentSpyToReturn2.currentComment
            })


        const addedCommentReplies = SortComments.SortCommentNestedReplies(sortCommentNestedRepliesParam1, mainAddRepliesFieldTo)

        expect(addedCommentReplies).toMatchObject(fullReplies1Obj2EmptyStrReturn)

        expect(validCommentSpy).toHaveNthReturnedWith(1, validCommentSpyToReturn1)
        expect(validCommentSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2)
        expect(validCommentSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam1[0].data)
        expect(validCommentSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam1[0].data.replies.data.children[0].data)

        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(1, secondInFirstObjReplies)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam1[0].data.replies, validCommentSpyToReturn1.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam1[0].data.replies.data.children[0].data.replies, validCommentSpyToReturn2.currentComment)
    });

   /* describe("Sort Comment Nested Replies 2", () => {
        afterEach(() => {
            // restore the spy created with spyOn
            jest.restoreAllMocks();
        });
    
    
   it("comment In Replies Data kind is t1 and is not Valid comment", () => {

    const sortCommentNestedRepliesParam1 = sortCommentNestedRepliesTestsDataOneObj.replyComments.Replies1Obj2EmptyStrNotValidUpsMissing.data.children

    const mainAddRepliesFieldTo = sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main

    const notValidCommentSpyToReturn = {
        isValid: false,
    }
    
    // ~~~~  Not Valid Comment Spy 
    const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
        .mockImplementationOnce(() => {
            console.log('notValidCommentSpy called');
            return notValidCommentSpyToReturn;
        })

    // ~~~~  Sort Nested Replies Spy     
    const sortNestedRepliesSpy = jest.spyOn(SortComments, "SortNestedReplies")
    .mockImplementation(()=>{
        console.log('sortNestedRepliesSpy was called')
        return;
    })


    const addedCommentReplies = SortComments.SortCommentNestedReplies(sortCommentNestedRepliesParam1, mainAddRepliesFieldTo)

    expect(addedCommentReplies).toMatchObject(mainAddRepliesFieldTo)

    expect(validCommentSpy).toHaveReturnedWith(notValidCommentSpyToReturn)
    expect(validCommentSpy).toHaveBeenCalledWith(sortCommentNestedRepliesParam1[0].data)

    expect(sortNestedRepliesSpy).not.toBeCalled()
    });

    });
    describe("Sort Comment Nested Replies 3", () => {
        afterEach(() => {
            // restore the spy created with spyOn
            jest.restoreAllMocks();
        });
  it("3 comments, one valid and data kind is t1, second not valid, third kind is not t1 or more, first holds replies field empty str", () => {
        //~~~~~   2 comments in children list
        const sortCommentNestedRepliesParam1 = sortCommentNestedRepliesTestsDataT1AndNotValidAndT3.replyComments.Replies1ObjEmptyStrValidT1AndNotValidMissingUpsAndT3.data.children

        const validCommentSpyToReturn1 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first
        }
        const validCommentSpyToReturn2 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second
        }
       
        const mainAddRepliesFieldTo = sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main
        const addedCommentRepliesReturn = sortCommentNestedRepliesTestsDataT1AndNotValidAndT3.addedCommentRepliesReturn.Replies1Obj1EmptyStrValid
        const fullReplies1Obj1EmptyStrReturn = addedCommentRepliesReturn.fullReplies1Obj1EmptyStrReturn
        const secondInFirstObjReplies = addedCommentRepliesReturn.secondInFirstObjReplies
        
        // ~~~~   Valid Comment Spy 
        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                console.log('validCommentSpy1 called');
                return validCommentSpyToReturn1;
            })
            .mockImplementationOnce(() => {
                console.log('validCommentSpyToReturn2 called');
                return validCommentSpyToReturn2
            })
            .mockImplementationOnce(() => {
                console.log('validCommentSpyToReturn3 called');
                return {isValid: false}
            })

        // ~~~~  Sort Nested Replies Spy     
        const sortNestedRepliesSpy = jest.spyOn(SortComments, "SortNestedReplies")
            .mockImplementationOnce(() => {
                console.log('sortNestedRepliesSpy1 called');
                const addedCommentReplies = SortComments.SortCommentNestedReplies(sortCommentNestedRepliesParam1[0].data.replies.data.children, validCommentSpyToReturn1.currentComment)
                console.log('addedCommentReplies sortNestedRepliesSpy1' + JSON.stringify(addedCommentReplies));
                return addedCommentReplies;
            })
            .mockImplementationOnce(() => {
                console.log('sortNestedRepliesSpy2 called');
                return validCommentSpyToReturn2.currentComment
                 })

        const addedCommentReplies = SortComments.SortCommentNestedReplies(sortCommentNestedRepliesParam1, mainAddRepliesFieldTo)

       expect(addedCommentReplies).toMatchObject(fullReplies1Obj1EmptyStrReturn)

        expect(validCommentSpy).toHaveNthReturnedWith(1, validCommentSpyToReturn1)
        expect(validCommentSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2)
        expect(validCommentSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam1[0].data)
        expect(validCommentSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam1[0].data.replies.data.children[0].data)

        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(1, secondInFirstObjReplies)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam1[0].data.replies, validCommentSpyToReturn1.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam1[0].data.replies.data.children[0].data.replies, validCommentSpyToReturn2.currentComment)

    });

   /*    it("2 comments, both valid and one data kind is t1, other more, first holds replies field empty str", () => {
        //~~~~~   2 comments in children list
        const sortCommentNestedRepliesPar1 = sortCommentNestedRepliesTestsDataT1AndMore.replyComments.Replies1ObjEmptyStrValidT1AndMore.data.children

        const validCommentSpyReturn1 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first
        }
        const validCommentSpyReturn2 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second
        }
       
        const mainAddRepliesField = sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main
        const addedCommentRepliesReturn1 = sortCommentNestedRepliesTestsDataT1AndMore.addedCommentRepliesReturn.Replies1Obj1EmptyStrValid
        const fullReplies1Obj1EmptyStr1MoreReturn = addedCommentRepliesReturn1.fullReplies2Obj1EmptyStr1MoreReturn
        const secondInFirstObjReply = addedCommentRepliesReturn1.secondInFirstObjReplies
        
        // ~~~~   Valid Comment Spy 
        const validCommentSpy1 = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                console.log('validCommentSpy1 called');
                return validCommentSpyReturn1;
            })
            .mockImplementationOnce(() => {
                console.log('validCommentSpyToReturn2 called');
                return validCommentSpyReturn2
            })
           

        // ~~~~  Sort Nested Replies Spy     
        const sortNestedRepliesSpy1 = jest.spyOn(SortComments, "SortNestedReplies")
            .mockImplementationOnce(() => {
                console.log('sortNestedRepliesSpy1 called');
                const addedCommentReplies = SortComments.SortCommentNestedReplies(sortCommentNestedRepliesPar1[0].data.replies.data.children, validCommentSpyReturn1.currentComment)
                console.log('addedCommentReplies sortNestedRepliesSpy1' + JSON.stringify(addedCommentReplies));
                return addedCommentReplies;
            })
            .mockImplementationOnce(() => {
                console.log('sortNestedRepliesSpy2 called');
                return validCommentSpyReturn2.currentComment
                 })

        const commentReplies = SortComments.SortCommentNestedReplies(sortCommentNestedRepliesPar1, mainAddRepliesField)

       expect(commentReplies).toMatchObject(fullReplies1Obj1EmptyStr1MoreReturn)

        expect(validCommentSpy1).toHaveNthReturnedWith(1, validCommentSpyReturn1)
        expect(validCommentSpy1).toHaveNthReturnedWith(2, validCommentSpyReturn2)
        expect(validCommentSpy1).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesPar1[0].data)
        expect(validCommentSpy1).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesPar1[0].data.replies.data.children[0].data)

        expect(sortNestedRepliesSpy1).toHaveNthReturnedWith(1, secondInFirstObjReply)
        expect(sortNestedRepliesSpy1).toHaveNthReturnedWith(2, validCommentSpyReturn2.currentComment)
        expect(sortNestedRepliesSpy1).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesPar1[0].data.replies, validCommentSpyReturn1.currentComment)
        expect(sortNestedRepliesSpy1).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesPar1[0].data.replies.data.children[0].data.replies, validCommentSpyReturn2.currentComment)

    });



it("commentInRepliesData in not a list, return err", () => {
const commentInRepliesData = {}
const mainAddRepliesFieldTo = sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main
const thowsErr = () => {
SortComments.SortCommentNestedReplies(commentInRepliesData, mainAddRepliesFieldTo)
}
expect(thowsErr).toThrow()

});
it("addRepliesFieldTo in not an object, return err", () => {
    const addRepliesFieldTo = ""
    const sortCommentNestedRepliesParam1 = sortCommentNestedRepliesTestsDataOneObj.replyComments.Replies1Obj2EmptyStrValid.data.children

    const thowsErr = () => {
    SortComments.SortCommentNestedReplies(sortCommentNestedRepliesParam1, addRepliesFieldTo)
    }

    expect(thowsErr).toThrow()
    
    })
*/








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
