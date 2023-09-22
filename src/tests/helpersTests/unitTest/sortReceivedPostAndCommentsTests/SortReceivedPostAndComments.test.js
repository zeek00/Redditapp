/* eslint-disable no-use-before-define */
import Enzyme, { shallow } from 'enzyme';
import { EnzymeAdapter } from 'enzyme';
import {
    validCommentData, commentInRepliesData, sortCommentNestedRepliesTestsDataT1AndNotValidAndT3,
    sortCommentNestedRepliesTestsDataOneObj, sortCommentNestedRepliesTestsDataTwoComments,
    sortCommentNestedRepliesTestsDataT1AndMore,
    SortReceivedPostAndCommentsData,
    extraSortReceivedPostAndCommentsData
} from '../../SortReceivedPostAndCommentsData';
import { validCommentDataExpectedResults } from '../../SortReceivedPostAndCommentsDataExpectedResults'

import * as SortComments from '../../../../helpers/sortReceivedPostAndComments/SortReceivedPostAndComments';

import * as SortPosts from '../../../../helpers/sortReceivedPosts/SortReceivedPosts'
import * as ValidCom from '../../../../helpers/sortReceivedPostAndComments/ValidComment';
import * as NestedReplies from '../../../../helpers/sortReceivedPostAndComments/SortNestedReplies'
import * as CommentNestedReplies from '../../../../helpers/sortReceivedPostAndComments/SortCommentNestedReplies'
import 'core-js/stable/structured-clone';
Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('sorting received post and its comments with different data', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    it("data is an empty list", () => {
        const postWithComments = []
        const resultReturn = [{
            comments: [],
            moreComments: [],
            post: []
        }]
        // #####   sortPostSpy #####
        const sortPostSpy = jest.spyOn(SortPosts, "SortReceivedPosts")
            .mockImplementationOnce(() => {
                console.log("sortPostSpy called")
                return;
            })

        // #####   validCommentSpy #####
        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                return;
            })

        // #####   SortNestedRepliesSpy #####
        const SortNestedRepliesSpy = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementationOnce(() => {
                return;
            })
        const result = SortComments.SortReceivedPostAndComments(postWithComments)

        expect(result).toMatchObject(resultReturn)

        expect(sortPostSpy).not.toBeCalled()
        expect(validCommentSpy).not.toBeCalled()
        expect(SortNestedRepliesSpy).not.toBeCalled()
    });

    it("one valid post kind t3 and comment kind t1 that replies to str", () => {

        const postWithComments = SortReceivedPostAndCommentsData.postComments.t3T1RepliesToStr
        const oneCorrectPostResult = extraSortReceivedPostAndCommentsData.sortPostResults.oneCorrectPostRes
        const resultReturn = SortReceivedPostAndCommentsData.postAndCommentsResult.t3T1RepliesToStr
        const validComment = sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first



        // #####   sortPostSpy #####
        const sortPostSpy = jest.spyOn(SortPosts, "SortReceivedPosts")
            .mockImplementationOnce(() => {
                return oneCorrectPostResult
            })

        // #####   validCommentSpy #####
        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                return {
                    isValid: true,
                    currentComment: structuredClone(validComment)
                }
            })

        // #####   SortNestedRepliesSpy #####
        const SortNestedRepliesSpy = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementationOnce(() => {
                return structuredClone(validComment)
            })

        const result = SortComments.SortReceivedPostAndComments(postWithComments)

        expect(result).toMatchObject(resultReturn)

        expect(sortPostSpy).toBeCalledTimes(1)
        expect(validCommentSpy).toBeCalledTimes(1)
        expect(SortNestedRepliesSpy).toBeCalledTimes(1)

        expect(sortPostSpy).toHaveNthReturnedWith(1, oneCorrectPostResult)
        expect(validCommentSpy).toBeCalledTimes(1, { isValid: true, currentComment: validComment })
        expect(SortNestedRepliesSpy).toBeCalledTimes(1, validComment)

    });
    it("one not valid post kind t3 and comment kind t1 that replies to str, validCommentSpy and SortNestedRepliesSpy not called", () => {

        const postWithComments = SortReceivedPostAndCommentsData.postComments.notValidt3T1RepliesToStr
        const resultReturn = [{ "comments": [], "moreComments": [], "post": [] }]

        // #####   sortPostSpy #####
        const sortPostSpy = jest.spyOn(SortPosts, "SortReceivedPosts")
            .mockImplementationOnce(() => {
                console.log("sortSpy was called")
                return []
            })

        // #####   validCommentSpy #####
        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                console.log("validCommentSpy was called")
                return;
            })

        // #####   SortNestedRepliesSpy #####
        const SortNestedRepliesSpy = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementationOnce(() => {
                return;
            })

        const result = SortComments.SortReceivedPostAndComments(postWithComments)

        //expect(result).toMatchObject(resultReturn)
        expect(sortPostSpy).toBeCalledTimes(1)
        expect(validCommentSpy).not.toBeCalled()
        expect(SortNestedRepliesSpy).not.toBeCalled()

        expect(sortPostSpy).toHaveNthReturnedWith(1, [])

    });

    it("two valid post kind t3 and comment kind t1 that replies to str,add only first valid post,ignore other post", () => {

        const postWithComments = SortReceivedPostAndCommentsData.postComments.twot3sT1RepliesToStr
        const oneCorrectPostResult = extraSortReceivedPostAndCommentsData.sortPostResults.oneCorrectPostRes
        const resultReturn = SortReceivedPostAndCommentsData.postAndCommentsResult.t3T1RepliesToStr
        const validComment = sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first

        // #####   sortPostSpy #####
        const sortPostSpy = jest.spyOn(SortPosts, "SortReceivedPosts")
            .mockImplementationOnce(() => {
                console.log("sortPostSpy called")
                return oneCorrectPostResult
            })

        // #####   validCommentSpy #####
        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                console.log("validCommentSpy called " )
                return {
                    isValid: true,
                    currentComment: structuredClone(validComment)
                }
            })

        // #####   SortNestedRepliesSpy #####
        const SortNestedRepliesSpy = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementationOnce(() => {
                return structuredClone(validComment)
            })

        const result = SortComments.SortReceivedPostAndComments(postWithComments)

        expect(result).toMatchObject(resultReturn)

        expect(sortPostSpy).toBeCalledTimes(1)
        expect(validCommentSpy).toBeCalledTimes(1)
        expect(SortNestedRepliesSpy).toBeCalledTimes(1)

        expect(sortPostSpy).toHaveNthReturnedWith(1, oneCorrectPostResult)
        expect(validCommentSpy).toHaveNthReturnedWith(1, { isValid: true, currentComment: validComment })
        expect(SortNestedRepliesSpy).toHaveNthReturnedWith(1, validComment)

    });

    it("one valid post kind t3 and comment kind t1 that replies to obj that then replies to str", () => {
        const validCommentSpyToReturn1 = {
            isValid: true,
            currentComment: structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first)
        }
        const sortPostSpyToReturn = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first)
        const postWithComments = SortReceivedPostAndCommentsData.postComments.t3T1RepliesT1AndItRepliesToStr
        const oneCorrectPostResult = extraSortReceivedPostAndCommentsData.sortPostResults.oneCorrectPostRes
        const resultReturn = SortReceivedPostAndCommentsData.postAndCommentsResult.t3T1RepliesToObjRepliesToStr
        const SortNestedRepliesSpyReturnedValue = sortCommentNestedRepliesTestsDataOneObj.addedCommentRepliesReturn.Replies1Obj2EmptyStrValid.secondInFirstObjReplies

        const validCommentSpyReturnedValue = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first
        }

        // #####   sortPostSpy #####
        const sortPostSpy = jest.spyOn(SortPosts, "SortReceivedPosts")
            .mockImplementationOnce(() => {
                return oneCorrectPostResult
            })

        // #####   validCommentSpy #####
        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn1
            })

        // #####   SortNestedRepliesSpy #####
        const SortNestedRepliesSpy = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementationOnce(() => {
                sortPostSpyToReturn.replies.push(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second)
                return sortPostSpyToReturn
            })

        const result = SortComments.SortReceivedPostAndComments(postWithComments)

       expect(result).toMatchObject(resultReturn)


        expect(sortPostSpy).toBeCalledTimes(1)
        expect(validCommentSpy).toBeCalledTimes(1)
        expect(SortNestedRepliesSpy).toBeCalledTimes(1)

        expect(sortPostSpy).toHaveNthReturnedWith(1, oneCorrectPostResult)
        expect(validCommentSpy).toHaveNthReturnedWith(1, validCommentSpyReturnedValue)
        expect(SortNestedRepliesSpy).toHaveNthReturnedWith(1, SortNestedRepliesSpyReturnedValue)

    });




    it("one valid post kind t3 and 2 comments, one replies to obj then it replies to str,other replies to obj then replies to moreComments", () => {
        const validCommentSpyToReturn1 = {
            isValid: true,
            currentComment: structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first)
        }
        const validCommentSpyToReturn2 = {
            isValid: true,
            currentComment: structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.third)
        }

        const validCommentSpyReturnedValue1 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first
        }
        const validCommentSpyReturnedValue2 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.third
        }

        const postWithComments = SortReceivedPostAndCommentsData.postComments.t3TwoCommOneRepliesT1AndItRepliesToStrOtherRepliesMoreC

        const oneCorrectPostResult = extraSortReceivedPostAndCommentsData.sortPostResults.oneCorrectPostRes

        const sortPostSpyToReturn1 = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first)
        const sortPostSpyToReturn2 = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.third)

        const resultReturn = SortReceivedPostAndCommentsData.postAndCommentsResult.t3TwoCommOneRepliesT1AndItRepliesToStrOtherRepliesMoreC
        const SortNestedRepliesSpyAddedCommentRepliesReturn = sortCommentNestedRepliesTestsDataTwoComments.addedCommentRepliesReturn.Replies2Obj1EmptyStr1mMoreValid

        const SortNestedRepliesSpyReturnedValue1 = SortNestedRepliesSpyAddedCommentRepliesReturn.secondInFirstObjReplies
        const SortNestedRepliesSpyReturnedValue2 = SortNestedRepliesSpyAddedCommentRepliesReturn.moreInThirdObjMoreReplies



        // #####   sortPostSpy #####
        const sortPostSpy = jest.spyOn(SortPosts, "SortReceivedPosts")
            .mockImplementationOnce(() => {
                return oneCorrectPostResult
            })

        // #####   validCommentSpy #####
        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn1
            })
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn2
            })


        // #####   SortNestedRepliesSpy #####
        const SortNestedRepliesSpy = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementationOnce(() => {
                sortPostSpyToReturn1.replies.push(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second)
                return sortPostSpyToReturn1
            })
            .mockImplementationOnce(() => {
                sortPostSpyToReturn2.moreReplies.push(...postWithComments[1].data.children[1].data.replies.data.children[0].data.children)
                return sortPostSpyToReturn2
            })

        const result = SortComments.SortReceivedPostAndComments(postWithComments)

        expect(result).toMatchObject(resultReturn)

        expect(sortPostSpy).toBeCalledTimes(1)
        expect(validCommentSpy).toBeCalledTimes(2)
        expect(SortNestedRepliesSpy).toBeCalledTimes(2)

        expect(sortPostSpy).toHaveNthReturnedWith(1, oneCorrectPostResult)

        expect(validCommentSpy).toHaveNthReturnedWith(1, validCommentSpyReturnedValue1)
        expect(validCommentSpy).toHaveNthReturnedWith(2, validCommentSpyReturnedValue2)

        expect(SortNestedRepliesSpy).toHaveNthReturnedWith(1, SortNestedRepliesSpyReturnedValue1)
        expect(SortNestedRepliesSpy).toHaveNthReturnedWith(2, SortNestedRepliesSpyReturnedValue2)

    });

    it("one valid post kind t3 and 2 comments, one replies to obj then it replies to str,other replies to moreComments", () => {
        const validCommentSpyToReturn1 = {
            isValid: true,
            currentComment: structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first)
        }

        const validCommentSpyReturnedValue1 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first
        }

        const resultReturn = SortReceivedPostAndCommentsData.postAndCommentsResult.t3TwoCommOneRepliesT1AndItRepliesToStrOtherMoreC
        const postWithComments = SortReceivedPostAndCommentsData.postComments.t3TwoCommOneRepliesT1AndItRepliesToStrOtherMoreC
        const oneCorrectPostResult = extraSortReceivedPostAndCommentsData.sortPostResults.oneCorrectPostRes

        const sortPostSpyToReturn1 = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first)
        const SortNestedRepliesSpyAddedCommentRepliesReturn = sortCommentNestedRepliesTestsDataTwoComments.addedCommentRepliesReturn.Replies2Obj1EmptyStr1mMoreValid
        const SortNestedRepliesSpyReturnedValue1 = SortNestedRepliesSpyAddedCommentRepliesReturn.secondInFirstObjReplies

        // #####   sortPostSpy #####
        const sortPostSpy = jest.spyOn(SortPosts, "SortReceivedPosts")
            .mockImplementationOnce(() => {
                return oneCorrectPostResult
            })

        // #####   validCommentSpy #####
        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn1
            })

        // #####   SortNestedRepliesSpy #####
        const SortNestedRepliesSpy = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementationOnce(() => {
                sortPostSpyToReturn1.replies.push(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second)
                return sortPostSpyToReturn1
            })

        const result = SortComments.SortReceivedPostAndComments(postWithComments)

        expect(result).toMatchObject(resultReturn)

        expect(sortPostSpy).toBeCalledTimes(1)
        expect(validCommentSpy).toBeCalledTimes(1)
        expect(SortNestedRepliesSpy).toBeCalledTimes(1)

        expect(sortPostSpy).toHaveNthReturnedWith(1, oneCorrectPostResult)

        expect(validCommentSpy).toHaveNthReturnedWith(1, validCommentSpyReturnedValue1)

        expect(SortNestedRepliesSpy).toHaveNthReturnedWith(1, SortNestedRepliesSpyReturnedValue1)
    });


})



//######################################################################################################################################

describe('sorting nested replies', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    it ('commentForReplies replies field is empty string, spySortCommentNestedReplies not called', () => {
        const addRepliesFieldTo = structuredClone(commentInRepliesData.addRepliesFieldTo)
        const sortedRepliesResultToReturn = commentInRepliesData.addRepliesFieldTo

        let spySortCommentNestedReplies = jest.spyOn(CommentNestedReplies, "SortCommentNestedReplies")
            .mockImplementation(()=>{
                return;
            })

        const sortedRepliesResult = NestedReplies.SortNestedReplies("", addRepliesFieldTo)

        expect(spySortCommentNestedReplies).not.toBeCalled()
        expect(sortedRepliesResult).toMatchObject(sortedRepliesResultToReturn)
    });

    it ('commentForReplies replies field is a list, sortNestedReplies is not called', () => {
        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const sortedRepliesResultToReturn = sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main

        let spySortCommentNestedReplies = jest.spyOn(CommentNestedReplies, "SortCommentNestedReplies")
            .mockImplementationOnce(()=>{
                return;
            })

        const sortedRepliesResult = NestedReplies.SortNestedReplies([], mainAddRepliesFieldTo)

        expect(spySortCommentNestedReplies).not.toBeCalled()
        expect(sortedRepliesResult).toMatchObject(sortedRepliesResultToReturn)
    });

    it ('commentForReplies replies field is an object with not Valid replies comment, sortNestedReplies is called', () => {
        const objCommentForReplies = commentInRepliesData.commentInRepliesDataMissingUps
        const commentInRepliesChildren = objCommentForReplies.data.children
        const mainAddRepliesComment = sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main
        const mainAddRepliesFieldTo = structuredClone(mainAddRepliesComment)

        const sortNestedCommentsRepliesSpy = jest.spyOn(CommentNestedReplies, "SortCommentNestedReplies")
            .mockImplementation(() => {
                return mainAddRepliesComment
            });

        const sortedRepliesResult = NestedReplies.SortNestedReplies(objCommentForReplies, mainAddRepliesFieldTo)

        expect(sortNestedCommentsRepliesSpy).toBeCalledWith(commentInRepliesChildren, mainAddRepliesFieldTo)
        expect(sortedRepliesResult).toMatchObject(mainAddRepliesComment)
    });

    it ('replies field is an object with Valid replies comment, sortNestedReplies is called', () => {

        const objCommentForReplies = commentInRepliesData.replyCommentWithEmptyRepliesField
        const commentInRepliesChildren = objCommentForReplies.data.children
        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const sortedRepliesResultToReturn = commentInRepliesData.replyCommentWithEmptyRepliesFieldToReturn

        const sortNestedCommentsRepliesSpy = jest.spyOn(CommentNestedReplies, "SortCommentNestedReplies")
            .mockImplementation(() => {
                return  sortedRepliesResultToReturn
            });

        const sortedRepliesResult = NestedReplies.SortNestedReplies(objCommentForReplies, mainAddRepliesFieldTo)

        expect(sortNestedCommentsRepliesSpy).toBeCalledWith(commentInRepliesChildren, mainAddRepliesFieldTo)
        expect(sortedRepliesResult).toMatchObject(sortedRepliesResultToReturn)
    })

    it("comment isValid and Data kind is t1, comment replies has 1 obj that holds replies field empty str", () => {

        const sortCommentRepliesParam = sortCommentNestedRepliesTestsDataOneObj.replyComments.Replies1Obj2EmptyStrValid
        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const fullReplies1Obj2EmptyStrReturn = sortCommentNestedRepliesTestsDataOneObj.addedCommentRepliesReturn.Replies1Obj2EmptyStrValid.fullReplies1Obj2EmptyStrReturn

        const secondInFirstObjReplies = sortCommentNestedRepliesTestsDataOneObj.addedCommentRepliesReturn.Replies1Obj2EmptyStrValid.secondInFirstObjReplies
        const validFirstComment = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first)
        const validSecondComment = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second)

        const sortNestedRepliesSpy = jest.spyOn(CommentNestedReplies, "SortCommentNestedReplies")
            .mockImplementationOnce(() => {
                const addedCommentReplies = NestedReplies.SortNestedReplies(sortCommentRepliesParam.data.children[0].data.replies, validFirstComment)
                mainAddRepliesFieldTo.replies.push(addedCommentReplies)
                return mainAddRepliesFieldTo;
            })
            .mockImplementationOnce(() => {
                const addedCommentReplies = NestedReplies.SortNestedReplies(sortCommentRepliesParam.data.children[0].data.replies.data.children[0].data.replies, validSecondComment)
                validFirstComment.replies.push(addedCommentReplies)
                return validFirstComment;
            })

        const addedNestedCommentReplies = NestedReplies.SortNestedReplies(sortCommentRepliesParam, mainAddRepliesFieldTo)

        expect(addedNestedCommentReplies).toMatchObject(fullReplies1Obj2EmptyStrReturn)

        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(1, fullReplies1Obj2EmptyStrReturn)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(2, secondInFirstObjReplies)
        expect(sortNestedRepliesSpy).toHaveBeenCalledTimes(2)
    })

    it("comment In Replies Data kind is t1 and is not Valid comment", () => {

        const sortCommentNestedRepliesParam = sortCommentNestedRepliesTestsDataOneObj.replyComments.Replies1Obj2EmptyStrNotValidUpsMissing
        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const addedCommentRepliesReturn = sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main

        const sortNestedRepliesSpy = jest.spyOn(CommentNestedReplies, "SortCommentNestedReplies")
            .mockImplementation((param1, param2) => {
                return param2
            })

        const addedCommentReplies = NestedReplies.SortNestedReplies(sortCommentNestedRepliesParam, mainAddRepliesFieldTo)

        expect(addedCommentReplies).toMatchObject(addedCommentRepliesReturn)
        expect(sortNestedRepliesSpy).toBeCalledTimes(1)
    });

    it("comments 2, both valid and Data kind is t1, first holds replies field empty str, second holds more comments", () => {
        const sortCommentNestedRepliesParam = sortCommentNestedRepliesTestsDataTwoComments.replyComments.Replies1Obj2EmptyStrValid2Comments
        const validFirstComment = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first)
        const validSecondComment = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second)
        const validThirdComment = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.third)


        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const addedCommentRepliesReturn = sortCommentNestedRepliesTestsDataTwoComments.addedCommentRepliesReturn.Replies2Obj1EmptyStr1mMoreValid
        const fullReplies2Obj1EmptyStr1MoreReturn = addedCommentRepliesReturn.fullReplies2Obj1EmptyStr1MoreReturn
        const secondInFirstObjReplies = addedCommentRepliesReturn.secondInFirstObjReplies
        const moreInThirdObjMoreReplies = addedCommentRepliesReturn.moreInThirdObjMoreReplies

        const sortNestedRepliesSpy = jest.spyOn(CommentNestedReplies, "SortCommentNestedReplies")
            .mockImplementationOnce((par1, par2) => {
                const addedCommentReplies = NestedReplies.SortNestedReplies(sortCommentNestedRepliesParam.data.children[0].data.replies, validFirstComment)
                const addedCommentReplies1 = NestedReplies.SortNestedReplies(sortCommentNestedRepliesParam.data.children[1].data.replies, validThirdComment)

                mainAddRepliesFieldTo.replies.push(addedCommentReplies)
                mainAddRepliesFieldTo.replies.push(addedCommentReplies1)
                return mainAddRepliesFieldTo;
            })
            .mockImplementationOnce((par1, par2) => {
                const addedCommentReplies = NestedReplies.SortNestedReplies(sortCommentNestedRepliesParam.data.children[0].data.replies.data.children[0].data.replies, validSecondComment)
                validFirstComment.replies.push(addedCommentReplies)
                return validFirstComment;
            })
            .mockImplementationOnce((par1, par2) => {
                par2.moreReplies.push(...par1[0].data.children)
                return par2;
            })

        const addedCommentReplies1 = CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam, mainAddRepliesFieldTo)

        expect(addedCommentReplies1).toMatchObject(fullReplies2Obj1EmptyStr1MoreReturn)

        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(1, fullReplies2Obj1EmptyStr1MoreReturn)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(2, secondInFirstObjReplies)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(3, moreInThirdObjMoreReplies)

        expect(sortNestedRepliesSpy).toHaveBeenCalledTimes(3)
    })

    it("2 comments, both valid and one data kind is t1, other more, first holds replies field empty str", () => {

        const sortCommentNestedRepliesParam = sortCommentNestedRepliesTestsDataT1AndMore.replyComments.Replies1ObjEmptyStrValidT1AndMore
        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const addedCommentRepliesReturn = sortCommentNestedRepliesTestsDataT1AndMore.addedCommentRepliesReturn.Replies1Obj1EmptyStrValid
        const fullReplies1Obj1EmptyStr1MoreReturn = addedCommentRepliesReturn.fullReplies2Obj1EmptyStr1MoreReturn

        const secondInFirstObjReply = addedCommentRepliesReturn.secondInFirstObjReplies
        const validFirstComment = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first)
        const validSecondComment = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second)

        const sortNestedRepliesSpy = jest.spyOn(CommentNestedReplies, "SortCommentNestedReplies")
            .mockImplementationOnce((par1, par2) => {
                const addedCommentReplies = NestedReplies.SortNestedReplies(sortCommentNestedRepliesParam.data.children[0].data.replies, validFirstComment)

                mainAddRepliesFieldTo.replies.push(addedCommentReplies)
                mainAddRepliesFieldTo.moreReplies.push(...par1.data.children[1].data.children)
                return mainAddRepliesFieldTo;
            })
            .mockImplementationOnce((par1, par2) => {
                const addedCommentReplies = NestedReplies.SortNestedReplies(sortCommentNestedRepliesParam.data.children[0].data.replies.data.children[0].data.replies, validSecondComment)
                validFirstComment.replies.push(addedCommentReplies)
                return validFirstComment;
            })

        const commentReplies = CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam, mainAddRepliesFieldTo)

        expect(commentReplies).toMatchObject(fullReplies1Obj1EmptyStr1MoreReturn)

        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(1, fullReplies1Obj1EmptyStr1MoreReturn)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(2, secondInFirstObjReply)

        expect(sortNestedRepliesSpy).toHaveBeenCalledTimes(2)
    });


    it("3 comments, one valid and data kind is t1, second not valid, third kind is not t1 or more, first holds replies field empty str", () => {
        const sortCommentNestedRepliesParam = sortCommentNestedRepliesTestsDataT1AndNotValidAndT3.replyComments.Replies1ObjEmptyStrValidT1AndNotValidMissingUpsAndT3
        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const addedCommentRepliesReturn = sortCommentNestedRepliesTestsDataT1AndNotValidAndT3.addedCommentRepliesReturn.Replies1Obj1EmptyStrValid
        const fullReplies1Obj1EmptyStrReturn = addedCommentRepliesReturn.fullReplies1Obj1EmptyStrReturn

        const secondInFirstObjReplies = addedCommentRepliesReturn.secondInFirstObjReplies
        const validFirstComment = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first)
        const validSecondComment = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second)

        const sortNestedRepliesSpy = jest.spyOn(CommentNestedReplies, "SortCommentNestedReplies")
            .mockImplementationOnce((par1, par2) => {
                const addedCommentReplies = NestedReplies.SortNestedReplies(sortCommentNestedRepliesParam.data.children[0].data.replies, validFirstComment)

                mainAddRepliesFieldTo.replies.push(addedCommentReplies)
                return mainAddRepliesFieldTo;
            })
            .mockImplementationOnce((par1, par2) => {
                const addedCommentReplies = NestedReplies.SortNestedReplies(sortCommentNestedRepliesParam.data.children[0].data.replies.data.children[0].data.replies, validSecondComment)

                validFirstComment.replies.push(addedCommentReplies)
                return validFirstComment;
            })

        const addedCommentReplies1 = CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam, mainAddRepliesFieldTo)

        expect(addedCommentReplies1).toMatchObject(fullReplies1Obj1EmptyStrReturn)

        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(1, fullReplies1Obj1EmptyStrReturn)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(2,secondInFirstObjReplies)
        expect(sortNestedRepliesSpy).toHaveBeenCalledTimes(2)
    })
});

//##########################################################################################################################





describe("Sort Comment Nested Replies", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it("comment isValid and Data kind is t1, comment replies has 1 obj that holds replies field empty str", () => {

        const sortCommentNestedRepliesParam = sortCommentNestedRepliesTestsDataOneObj.replyComments.Replies1Obj2EmptyStrValid.data.children

        const validCommentSpyToReturn1 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first
        }
        const validCommentSpyToReturn2 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second
        }

        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const fullReplies1Obj2EmptyStrReturn = sortCommentNestedRepliesTestsDataOneObj.addedCommentRepliesReturn.Replies1Obj2EmptyStrValid.fullReplies1Obj2EmptyStrReturn
        const secondInFirstObjReplies = sortCommentNestedRepliesTestsDataOneObj.addedCommentRepliesReturn.Replies1Obj2EmptyStrValid.secondInFirstObjReplies

        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn1;
            })
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn2
            })

        const sortNestedRepliesSpy = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementationOnce(() => {
                return CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam[0].data.replies.data.children, structuredClone(validCommentSpyToReturn1.currentComment))

            })
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn2.currentComment
            })

        const addedCommentReplies = CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam, mainAddRepliesFieldTo)
        expect(addedCommentReplies).toMatchObject(fullReplies1Obj2EmptyStrReturn)

        expect(validCommentSpy).toHaveNthReturnedWith(1, validCommentSpyToReturn1)
        expect(validCommentSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2)
        expect(validCommentSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam[0].data)
        expect(validCommentSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam[0].data.replies.data.children[0].data)

        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(1, secondInFirstObjReplies)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam[0].data.replies, validCommentSpyToReturn1.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam[0].data.replies.data.children[0].data.replies, validCommentSpyToReturn2.currentComment)

    });

    it("comment In Replies Data kind is t1 and is not Valid comment", () => {

        const sortCommentNestedRepliesParam = sortCommentNestedRepliesTestsDataOneObj.replyComments.Replies1Obj2EmptyStrNotValidUpsMissing.data.children
        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)

        const notValidCommentSpyToReturn = {
            isValid: false,
        }

        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                return notValidCommentSpyToReturn;
            })

        const sortNestedRepliesSpy = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementation(() => {
                return;
            })

        const addedCommentReplies = CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam, mainAddRepliesFieldTo)

        expect(addedCommentReplies).toMatchObject(mainAddRepliesFieldTo)

        expect(validCommentSpy).toHaveReturnedWith(notValidCommentSpyToReturn)
        expect(validCommentSpy).toHaveBeenCalledWith(sortCommentNestedRepliesParam[0].data)

        expect(sortNestedRepliesSpy).not.toBeCalled()
    });

    it("comments 2, both valid and Data kind is t1, first holds replies field empty str, second holds more comments", () => {
        const sortCommentNestedRepliesParam = sortCommentNestedRepliesTestsDataTwoComments.replyComments.Replies1Obj2EmptyStrValid2Comments.data.children

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

        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const addedCommentRepliesReturn = sortCommentNestedRepliesTestsDataTwoComments.addedCommentRepliesReturn.Replies2Obj1EmptyStr1mMoreValid
        const fullReplies2Obj1EmptyStr1MoreReturn = addedCommentRepliesReturn.fullReplies2Obj1EmptyStr1MoreReturn
        const secondInFirstObjReplies = addedCommentRepliesReturn.secondInFirstObjReplies
        const moreInThirdObjMoreReplies = addedCommentRepliesReturn.moreInThirdObjMoreReplies

        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                console.log('validCommentSpy1 called');
                return validCommentSpyToReturn1;
            })
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn2
            })
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn3
            })

        const sortNestedRepliesSpy = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementationOnce(() => {
                return CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam[0].data.replies.data.children, structuredClone(validCommentSpyToReturn1.currentComment))

            })
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn2.currentComment
            })
            .mockImplementationOnce(() => {
                return CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam[1].data.replies.data.children, validCommentSpyToReturn3.currentComment)

            })

        const addedCommentReplies1 = CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam, mainAddRepliesFieldTo)

        expect(addedCommentReplies1).toMatchObject(fullReplies2Obj1EmptyStr1MoreReturn)

        expect(validCommentSpy).toHaveNthReturnedWith(1, validCommentSpyToReturn1)
        expect(validCommentSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2)
        expect(validCommentSpy).toHaveNthReturnedWith(3, validCommentSpyToReturn3)

        expect(validCommentSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam[0].data)
        expect(validCommentSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam[0].data.replies.data.children[0].data)
        expect(validCommentSpy).toHaveBeenNthCalledWith(3, sortCommentNestedRepliesParam[1].data)

        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(1, secondInFirstObjReplies)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2.currentComment)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(3, moreInThirdObjMoreReplies)

        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam[0].data.replies, validCommentSpyToReturn1.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam[0].data.replies.data.children[0].data.replies, validCommentSpyToReturn2.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(3, sortCommentNestedRepliesParam[1].data.replies, validCommentSpyToReturn3.currentComment)

    })

    it("2 comments, both valid and one data kind is t1, other more, first holds replies field empty str", () => {
        const sortCommentNestedRepliesParam = sortCommentNestedRepliesTestsDataT1AndMore.replyComments.Replies1ObjEmptyStrValidT1AndMore.data.children

        const validCommentSpyReturn1 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first
        }
        const validCommentSpyReturn2 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second
        }

        const mainAddRepliesField = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const addedCommentRepliesReturn = sortCommentNestedRepliesTestsDataT1AndMore.addedCommentRepliesReturn.Replies1Obj1EmptyStrValid
        const fullReplies1Obj1EmptyStr1MoreReturn = addedCommentRepliesReturn.fullReplies2Obj1EmptyStr1MoreReturn
        const secondInFirstObjReply = addedCommentRepliesReturn.secondInFirstObjReplies

        const validCommentSpy1 = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                return validCommentSpyReturn1;
            })
            .mockImplementationOnce(() => {
                return validCommentSpyReturn2
            })

        const sortNestedRepliesSpy1 = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementationOnce(() => {
                return CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam[0].data.replies.data.children, structuredClone(validCommentSpyReturn1.currentComment))

            })
            .mockImplementationOnce(() => {
                return validCommentSpyReturn2.currentComment
            })

        const commentReplies = CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam, mainAddRepliesField)

        expect(commentReplies).toMatchObject(fullReplies1Obj1EmptyStr1MoreReturn)

        expect(validCommentSpy1).toHaveNthReturnedWith(1, validCommentSpyReturn1)
        expect(validCommentSpy1).toHaveNthReturnedWith(2, validCommentSpyReturn2)
        expect(validCommentSpy1).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam[0].data)
        expect(validCommentSpy1).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam[0].data.replies.data.children[0].data)

        expect(sortNestedRepliesSpy1).toHaveNthReturnedWith(1, secondInFirstObjReply)
        expect(sortNestedRepliesSpy1).toHaveNthReturnedWith(2, validCommentSpyReturn2.currentComment)
        expect(sortNestedRepliesSpy1).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam[0].data.replies, validCommentSpyReturn1.currentComment)
        expect(sortNestedRepliesSpy1).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam[0].data.replies.data.children[0].data.replies, validCommentSpyReturn2.currentComment)

    });


    it("3 comments, one valid and data kind is t1, second not valid, third kind is not t1 or more, first holds replies field empty str", () => {
        const sortCommentNestedRepliesParam = sortCommentNestedRepliesTestsDataT1AndNotValidAndT3.replyComments.Replies1ObjEmptyStrValidT1AndNotValidMissingUpsAndT3.data.children

        const validCommentSpyToReturn1 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.first
        }
        const validCommentSpyToReturn2 = {
            isValid: true,
            currentComment: sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.second
        }

        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const addedCommentRepliesReturn = sortCommentNestedRepliesTestsDataT1AndNotValidAndT3.addedCommentRepliesReturn.Replies1Obj1EmptyStrValid
        const fullReplies1Obj1EmptyStrReturn = addedCommentRepliesReturn.fullReplies1Obj1EmptyStrReturn
        const secondInFirstObjReplies = addedCommentRepliesReturn.secondInFirstObjReplies

        const validCommentSpy = jest.spyOn(ValidCom, "ValidComment")
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn1;
            })
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn2
            })
            .mockImplementationOnce(() => {
                return { isValid: false }
            })

        const sortNestedRepliesSpy = jest.spyOn(NestedReplies, "SortNestedReplies")
            .mockImplementationOnce(() => {
                return CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam[0].data.replies.data.children, structuredClone(validCommentSpyToReturn1.currentComment))

            })
            .mockImplementationOnce(() => {
                return validCommentSpyToReturn2.currentComment
            })

        const addedCommentReplies = CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam, mainAddRepliesFieldTo)

        expect(addedCommentReplies).toMatchObject(fullReplies1Obj1EmptyStrReturn)

        expect(validCommentSpy).toHaveNthReturnedWith(1, validCommentSpyToReturn1)
        expect(validCommentSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2)
        expect(validCommentSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam[0].data)
        expect(validCommentSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam[0].data.replies.data.children[0].data)

        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(1, secondInFirstObjReplies)
        expect(sortNestedRepliesSpy).toHaveNthReturnedWith(2, validCommentSpyToReturn2.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(1, sortCommentNestedRepliesParam[0].data.replies, validCommentSpyToReturn1.currentComment)
        expect(sortNestedRepliesSpy).toHaveBeenNthCalledWith(2, sortCommentNestedRepliesParam[0].data.replies.data.children[0].data.replies, validCommentSpyToReturn2.currentComment)

    });


    it("commentInRepliesData in not a list, return err", () => {
        const commentInRepliesData = {}
        const mainAddRepliesFieldTo = structuredClone(sortCommentNestedRepliesTestsDataOneObj.validComments.Replies1Obj2EmptyStr.main)
        const throwsErr = () => {
            CommentNestedReplies.SortCommentNestedReplies(commentInRepliesData, mainAddRepliesFieldTo)
        }
        expect(throwsErr).toThrow()

    });

    it("addRepliesFieldTo in not an object, return err", () => {
        const addRepliesFieldTo = ""
        const sortCommentNestedRepliesParam1 = sortCommentNestedRepliesTestsDataOneObj.replyComments.Replies1Obj2EmptyStrValid.data.children

        const throwsErr = () => {
            CommentNestedReplies.SortCommentNestedReplies(sortCommentNestedRepliesParam1, addRepliesFieldTo)
        }
        expect(throwsErr).toThrow()
    })
});

//################################################################################################








describe('comment validation', () => {

    it('receiving empty comment', () => {
        const comment = {}
        const result = ValidCom.ValidComment(comment)
        const expectedResult = { isValid: false }

        expect(result).toMatchObject(expectedResult)
    });

    it('receiving a comment with correct fields', () => {
        const comment = validCommentData.commentWithCorrectFields
        const result = ValidCom.ValidComment(comment)
        const expectedResult = validCommentDataExpectedResults.commentWithCorrectFields

        expect(result).toMatchObject(expectedResult)
    });

    it('receiving a comment with createdUTC field missing', () => {
        const comment = validCommentData.commentWithCreatedUTCFieldMissing
        const result = ValidCom.ValidComment(comment)

        const expectedResult = { isValid: false }
        expect(result).toMatchObject(expectedResult)
    });
})