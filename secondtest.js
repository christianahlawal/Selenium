const { Builder, By, until, Browser} = require('selenium-webdriver')
const { expect} = require('chai')
// const { describe } = require('mocha')


describe('end to end testing', ()=>{
    const driver = new Builder().forBrowser('firefox').build();

    it('should launch url', () =>{
        driver.get('http://the-internet.herokuapp.com/secure')
    })
    it('should login user', async ()=>{
        try{ 
        await driver.findElement(By.id('username')).sendKeys('tomsmith'); 
        await driver.findElement(By.id('password')).sendKeys('SuperSecretPassword'); 
        await driver.findElement(By.className("fa fa-2x fa-sign-in")).click();
        await driver.findElement(By.xpath(`//i[@class='fa fa-2x fa-sign-in']`)).click();
        }catch (error) {
        console.log(error);
      }
    })

})