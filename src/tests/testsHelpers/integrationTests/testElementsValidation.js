import {By} from "selenium-webdriver";

export const validateNavBarElementsForTest = async (driver) => {
    let requiredElementsCorrect = false

    const bestPostLink = await driver.findElements(By.xpath(`//div[a/text()="Best Post"]`))
    const homePageLink = await driver.findElements(By.xpath(`//div[a/text()="REDdit"]`))
    const searchBar = await driver.findElements(By.id(`srch`))

if (bestPostLink.length === 1 && homePageLink.length === 1 && searchBar.length === 1){
    requiredElementsCorrect = true
}
else {

    throw new Error("err occur in testElementsValidation file, validateNavBarElementsForTest fnc, some elements aren't correct")
}


    return requiredElementsCorrect
}



export const validatePostElementsForTest = async (postElem) => {
    let requiredElementsCorrect = false

    const postDivs = await postElem[0].findElements(By.tagName("div")) //8

    const UpVoteSvg = await postDivs[1].findElements(By.tagName("svg")) //1
    const DownVoteSvg = await postDivs[2].findElements(By.tagName("svg"))//1
    const VoteP = await postDivs[0].findElements(By.tagName("p")) //1


    const subredPCommentsP = await postDivs[4].findElements(By.tagName("p")) //1
    const profileImage = await postDivs[4].findElements(By.tagName("img")) //1

    const titleP = await postDivs[5].findElements(By.tagName("p")) //1

    const postImage= await postDivs[6].findElements(By.tagName("img")) //1

    const linkSvg= await postDivs[7].findElements(By.tagName("svg")) //1
    const linkP= await postDivs[7].findElements(By.tagName("p")) //1

    if (postDivs.length === 8){

        if (UpVoteSvg.length === 1 && DownVoteSvg.length === 1 && VoteP.length === 1 &&
        subredPCommentsP.length === 1 && profileImage.length === 1 && titleP.length === 1 &&
        postImage.length === 1 && linkSvg.length === 1 && linkP.length === 1){
            requiredElementsCorrect = true
        }
        else {
            throw new Error("err occur in testElementsValidation file, validatePostElementsForTest fnc, some elements aren't correct")

        }
    }
    else {

        throw new Error("err occur in testElementsValidation file, validatePostElementsForTest fnc, postDivs.length suppose to be 8 but its not")
    }


    return requiredElementsCorrect
}