export function getNestedObject(obj, argsList) {
    if(typeof obj ==="object" && !Array.isArray(obj) && obj !== null && obj !== undefined){
    return argsList.reduce((obj, currArg) => {
            return obj && obj[currArg]}, obj)
}
    else {
        return undefined
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