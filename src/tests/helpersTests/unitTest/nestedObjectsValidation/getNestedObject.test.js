import Enzyme from 'enzyme';
import { EnzymeAdapter } from 'enzyme';
import * as nestedObjectFieldsValidation from '../../../../helpers/nestedObjectsFieldValidation/getNestedObjects'
import {nestedObjectsdata} from "./nestedObjectsTestData";
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("getNestedObject", () => {

    it("pass one correct arg to the list of args, would match correct obj", ()=>{
        const fullObject = nestedObjectsdata.validOnePosts
        const nestedObject = nestedObjectFieldsValidation.getNestedObject(fullObject, ["data"])
        const toMatch =  {
            "title": "1",
            "subreddit_id": "1",
        }

            expect(nestedObject).toMatchObject(toMatch)
    })

    it("pass two correct arg to the list of args, would match correct obj", ()=>{
        const fullObject = nestedObjectsdata.validPost3Properties
        const nestedObject = nestedObjectFieldsValidation.getNestedObject(fullObject, ["data", "child"])
        const toMatch =  {
            "kind": "t3",
            "data": {
                "title": "1",
                "subreddit_id": "1",
            }
        }

        expect(nestedObject).toMatchObject(toMatch)
    })

    it("pass three correct args to the list of args, would match correct obj", ()=>{
        const fullObject = nestedObjectsdata.validPost3Properties
        const nestedObject = nestedObjectFieldsValidation.getNestedObject(fullObject, ["data", "child", "data"])
        const toMatch = {
                "title": "1",
                "subreddit_id": "1",
            }

        expect(nestedObject).toMatchObject(toMatch)
    })

    it("pass two correct and one incorrect args to the list of args, return undefined", ()=>{
        const fullObject = nestedObjectsdata.validPost3Properties
        const nestedObject = nestedObjectFieldsValidation.getNestedObject(fullObject, ["data", "child", "child"])
        const toMatch = undefined

        console.log("returned: " + JSON.stringify(nestedObject))
        expect(nestedObject).toBe(toMatch)
    })

    it("pass null instead of an obj, return undefined", ()=>{
        const fullObject = null
        const nestedObject = nestedObjectFieldsValidation.getNestedObject(fullObject, ["data", "child", "child"])
        const toMatch = undefined

        console.log("returned: " + JSON.stringify(nestedObject))
        expect(nestedObject).toBe(toMatch)
    })

    it("pass undefined instead of an obj, return undefined", ()=>{
        const fullObject = undefined
        const nestedObject = nestedObjectFieldsValidation.getNestedObject(fullObject, ["data", "child", "child"])
        const toMatch = undefined

        console.log("returned: " + JSON.stringify(nestedObject))
        expect(nestedObject).toBe(toMatch)
    })
})
