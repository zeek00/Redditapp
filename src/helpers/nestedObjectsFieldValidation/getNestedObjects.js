export function getNestedObject(obj, argsList) {
    return argsList.reduce((obj, currArg) => obj && obj[currArg], obj)
}



export function getIsNestedObjectExists(obj, currField, ...restFields){
    console.log('getIsNestedObjectExists ' + JSON.stringify(obj) + "### curr Field: " + JSON.stringify(currField) + JSON.stringify(...restFields));
    //validate if obj is obj, not null, list etc...
    if (obj === undefined){
        return false
    }
    else if ( (restFields.length === 0 || restFields === undefined) && obj.hasOwnProperty(currField)){

        return true
    }
    else {
        const isNestedObject = getIsNestedObjectExists(obj[currField], ...restFields)
        return isNestedObject
    }
}