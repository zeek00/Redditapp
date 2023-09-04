//const m = require("mocha");
const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");
//const {mochaHooks} = require("./hooksForTesting")
//const {describe, before, after} = require("mocha")


/*
    this.beforeEach(async function () {
      console.log('called before');
      //this.timeout(500);
      driver = new Builder().forBrowser('chrome').build();
      console.log('end before');
      //done();
    }).timeout(10000);

    it('resolves', (done) => { 
      console.log('5');
      done();
    });
    */

describe('First script', function () {
    let driver;

    this.beforeAll(async function () {
    //beforeEach(async function () {
      console.log('called before');
     this.timeout(5000);
      driver =  await new Builder().forBrowser('chrome').build();
      console.log('end before');
    })

    it('resolves', async function () {
      this.timeout(15000);
      console.log('timeout is ' + this.timeout());
      assert.equal(driver !== undefined, true)

      await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

      let title = await driver.getTitle();
      assert.equal("Web form", title);
      //done();
    });

    /*this.afterEach(async () => {
      console.log('called after');
      
      await driver.quit()
    });*/

    /*it('First Selenium script', async function () {
      console.log('driver: ' + JSON.stringify(driver));
      
      await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

      let title = await driver.getTitle();
      assert.equal("Web form", title);

      await driver.manage().setTimeouts({implicit: 500});

      let textBox = await driver.findElement(By.name('my-text'));
      let submitButton = await driver.findElement(By.css('button'));

      await textBox.sendKeys('Selenium');
      await submitButton.click();

      let message = await driver.findElement(By.id('message'));
      let value = await message.getText();
      assert.equal("Received!", value);
      
      let a = 1
      assert.equal(a, 1)
    }).timeout(10000);*/
  });