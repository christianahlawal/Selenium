const { Builder, By, until, Browser} = require('selenium-webdriver')
const { expect} = require('chai')
// const { describe } = require('mocha')


describe('end to end testing', ()=>{
    const driver = new Builder().forBrowser('firefox').build();

    it('should launch url', () =>{
        driver.get('https://uat.payzone.ng')
    })
    
   it('it should sign up a user with inputs', async ()=>{
        try {
          await driver.findElement(By.xpath(`//button[@title='Account']`)).click();
          await driver.findElement(By.xpath(`(//a[@class='pz-btn-group__btn'])[2]`)).click();
          // await driver.wait(until.elementLocated(By.className('font-weight-semi-bold'),4000)).getText().then(value =>{
          //   console.log('your value is:',value);
          //   assert.deepEqual(value,'Login')
          // })
          await driver.wait(until.elementLocated(By.xpath(`//input[@name='email']`)),2000).sendKeys("chibuiky@gmail.com");
          await driver.findElement(By.xpath(`//input[@name='password']`)).sendKeys("password");
          await driver.wait(until.elementLocated(By.xpath(`//button[@class='pz-btn pz-btn--lg position-relative pz-btn--primary pz-btn--wide']`)),2000).click();
          
        } catch (error) {
          console.log(error);
        }
})
})