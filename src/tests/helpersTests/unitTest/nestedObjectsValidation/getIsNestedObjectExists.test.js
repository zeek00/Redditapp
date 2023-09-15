import Enzyme from 'enzyme';
import { EnzymeAdapter } from 'enzyme';
import * as nestedObjectFieldsValidation from '../../../../helpers/nestedObjectsFieldValidation/getNestedObjects'
import {nestedObjectsdata} from "./nestedObjectsTestData";
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("getIsNestedObjectExists", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("given object has 1 searched property, returns true", ()=> {
        const nestedObjectValidData = nestedObjectsdata.validOnePosts

        const isValid = nestedObjectFieldsValidation.getIsNestedObjectExists(nestedObjectValidData,"data" )

        expect(isValid).toBe(true)
    })

    it("given object has 2 searched properties, returns true", ()=> {
        const nestedObjectValidData = nestedObjectsdata.validPosts

        const isValid = nestedObjectFieldsValidation.getIsNestedObjectExists(nestedObjectValidData,"data" , "children" )

        expect(isValid).toBe(true)
    })
    it("given object has 3 searched properties, returns true", ()=> {
        const nestedObjectValidData = nestedObjectsdata.validPost3Properties

        const isValid = nestedObjectFieldsValidation.getIsNestedObjectExists(nestedObjectValidData,"data" , "child", "data")

        expect(isValid).toBe(true)
    })

    it("given object does not have searched properties, returns false", ()=> {
        const nestedObjectNotValidData = nestedObjectsdata.notValidPosts

        const isValid = nestedObjectFieldsValidation.getIsNestedObjectExists(nestedObjectNotValidData,"data" ,"children" )

        expect(isValid).toBe(false)
    })

    it("given object is undefined, returns false", ()=> {
        const nestedObjectNotValidData = undefined

        const isValid = nestedObjectFieldsValidation.getIsNestedObjectExists(nestedObjectNotValidData,"data" ,"children" )

        expect(isValid).toBe(false)
    })

    it("given object is a list, returns false", ()=> {
        const nestedObjectNotValidData = []

        const isValid = nestedObjectFieldsValidation.getIsNestedObjectExists(nestedObjectNotValidData,"data" ,"children" )

        expect(isValid).toBe(false)
    })
    it("given object is null, returns false", ()=> {
        const nestedObjectNotValidData = null

        const isValid = nestedObjectFieldsValidation.getIsNestedObjectExists(nestedObjectNotValidData,"data" ,"children" )

        expect(isValid).toBe(false)
    })
    it("given object is a string, returns false", ()=> {
        const nestedObjectNotValidData = "string"

        const isValid = nestedObjectFieldsValidation.getIsNestedObjectExists(nestedObjectNotValidData,"data" ,"children" )

        expect(isValid).toBe(false)
    })
})