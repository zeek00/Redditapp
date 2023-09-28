export function getNestedObject(obj, argsList) {
    // Check if obj is a non-null, non-undefined object (not an array)
    if (typeof obj === "object" && !Array.isArray(obj) && obj !== null && obj !== undefined) {
        // Use reduce to traverse the nested structure
        return argsList.reduce((nestedObj, currArg) => {
            // Access the current property and update nestedObj
            return nestedObj && nestedObj[currArg];
        }, obj);
    } else {
        // Return undefined if obj is not a valid object
        return undefined;
    }
}



export function getIsNestedObjectExists(obj, currField, ...restFields){
    console.log('getIsNestedObjectExists ' + JSON.stringify(obj) + "### curr Field: " + JSON.stringify(currField) + JSON.stringify(...restFields));

    if(typeof obj ==="object" && !Array.isArray(obj) && obj !== null){
        if (obj === undefined){
            return false
        }
        else if ( (restFields.length === 0 || restFields === undefined) && obj.hasOwnProperty(currField)){

            return true
        }
        else {

            return getIsNestedObjectExists(obj[currField], ...restFields)
        }
    }
    else{
        console.log("expected to receive an obj but got: " + JSON.stringify((obj)))
        return false

    }

}