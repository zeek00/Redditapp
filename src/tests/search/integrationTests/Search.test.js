//single_test.js:Jest testing tutorial for Selenium JavaScript Testing
/**
 * @jest-environment jest-environment-webdriver
 */


import {writeFileSync} from 'node:fs'
import * as mockServ from "../../../../mockServer/mockServer"
const {Key, Builder, By, until} = require('selenium-webdriver');
import * as validateElements from '../../testsHelpers/integrationTests/testElementsValidation'
import * as getSearchData from "../../../api/search/getSortedSearchedData";


jest.setTimeout(200000)

describe("from home page navigate to search/mango url", () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        // func to get the cloud driver eslint disable next line no undef
        await driver.get("http://localhost:3000");
    })

    afterAll(() => {

        setTimeout(async () => {
            await driver.quit()
        }, 100);
    });

    test("add mango string into search bar and press enter, should navigate to new page and load it fully /search/mango, to create new screenshot, to have correct elements", async () => {
        const inputValueToAdd = 'mango'

        await driver.wait(until.elementLocated(By.id('srch')), 5 * 1000)
        const searchInput = await driver.findElement(By.id('srch'))


        await searchInput.sendKeys(inputValueToAdd);
        await driver.actions()
            .keyDown(Key.ENTER)
            .perform()

        await driver.wait(until.elementsLocated(By.xpath("//ul/li/div/div/div/img")), 10 * 1000)

        const currentUrl = await driver.getCurrentUrl().then(url => {
            return url
        })

        if (currentUrl === `http://localhost:3000/search/${inputValueToAdd}`) {

            let image = await driver.takeScreenshot()
            await writeFileSync("SearchMangoScreenShot.png", image, 'base64')
        } else {
            throw new Error(`err occur in integration test, url suppose to be http://localhost:3000/search/${inputValueToAdd} but ended up with ${currentUrl}`)
        }

        const validNavBarElements = await validateElements.validateNavBarElementsForTest(driver)

        const searchedPosts = await driver.findElements(By.xpath("//ul/li/div")).then(foundPosts => {
            return foundPosts
        })

        const validFirstPostElements = await validateElements.validatePostElementsForTest(searchedPosts)

        expect(validFirstPostElements).toBe(true)
        expect(currentUrl).toBe(`http://localhost:3000/search/${inputValueToAdd}`)
        expect(validNavBarElements).toBe(true)

    })
});

describe("start from search/mango page", () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        // func to get the cloud driver eslint disable next line no undef
        await driver.get("http://localhost:3000/search/mango");
    })

    afterAll(() => {
        setTimeout(async () => {
            await driver.quit()
        }, 100);
    });

    test("click on the first post, navigate to new page /id  and fully load all comments, contain all required elements", async () => {
        await driver.wait(until.elementsLocated(By.xpath("//ul/li/div/div/div/img")), 12 * 1000)

        let image = await driver.takeScreenshot()
        await writeFileSync("SearchedMangoComments1.png", image, 'base64')

        const links = await driver.findElements(By.xpath("//ul/li/div/div/div/a"))
            .then(elements => {
                return elements
            })
        const firstLink = await links[0]

        const attrHref = await firstLink.getAttribute('href').then(href => {
            return href
        })

        const actions = await driver.actions({async: true});
        await actions.move({origin: firstLink}).click().perform();

        await driver.wait(async function () {
            return await driver.executeScript('return document.readyState').then(async function (readyState) {
                return readyState === 'complete'
            })
        }, 5 * 1000);

        await driver.sleep(1000);

        const currentUrl = await driver.getCurrentUrl().then(currUrl => {
            return currUrl
        })

        if (currentUrl === attrHref) {
            await driver.takeScreenshot().then(async function (image1) {
                await writeFileSync("SearchedMangoComments2.png", image1, 'base64')
            })
        } else {
            throw new Error("suppose to have a param " + attrHref + " but ended up at " + currentUrl)
        }

        const validNavBarElements = await validateElements.validateNavBarElementsForTest(driver)

        const postIdDiv = await driver.findElements(By.id("postId")).then(foundElement => {
            return foundElement
        })

        const postIdDivDiv = await postIdDiv[0].findElements(By.tagName("div"))
        const mainPostDiv = await postIdDivDiv[0].findElements(By.tagName("div"))
        const validFirstPostElements = await validateElements.validatePostElementsForTest(mainPostDiv)


        expect(validFirstPostElements).toBe(true)
        expect(validNavBarElements).toBe(true)

    })
})

describe("", ()=> {

    let driver;

    afterEach(async () => {
        jest.restoreAllMocks();
    });


    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();

        // func to get the cloud driver eslint disable next line no undef
        await driver.get("http://localhost:3000/search/mango");
    })

    afterAll(() => {
        setTimeout(async () => {
            await driver.quit()
        }, 100);
    });

    it("", async () => {



        await driver.wait(until.elementsLocated(By.xpath("//ul/li/div/div/div/img")), 12 * 1000)
console.log("l")


    })
})

